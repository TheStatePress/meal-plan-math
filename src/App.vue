<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="meal-input col-sm-4">
        <p>Types of Meal Per Week</p>
        <div class="row">
          <div class="input-group">
            <label for="breakfasts" class="col">Breakfasts: {{numBreakfasts}}</label>
            <input v-on:change="breakfastsChange" class="col" type="range" min="0" max="6" value="2" name="breakfasts" id="numBreakfasts">
          </div> 
        </div>
        <div class="row">
          <div class="input-group">
            <label for="lunches" class="col">Lunches: {{numLunches}}</label>
            <input class="col" v-on:change="lunchesChange" type="range" min="0" max="8" value="2" name="lunches" id="numLunches">
          </div>
        </div>
        <div class="row">
          <div class="input-group">
            <label for="dinners" class="col">Dinners: {{numDinners}}</label>
            <input v-on:change="dinnersChange" class="col" type="range" min="0" max="7" value="2" name="dinners" id="numDinners">
          </div>
        </div>   
        <div class="row">
          <p>Change the number of each type of meal you eat per week. The cash value will be graphed on the right in <span class="gold">gold.</span> If you have selected more meals than are in a meal plan, it will be displayed in <span class="gray">gray.</span> All other meal plans will be displayed in <span class="maroon">maroon.</span> Meal plan prices are calculated by subtracting M&amp;G dollars from total price (M&amp;G is 1:1 with cash).</p>
        </div> 
      </div>

      <div id="results" class="col-sm-8">
        <p>Cash Cost: {{cashCostString}}</p>
        <meal-plan-chart :height="300" :chart-data="getChartData"></meal-plan-chart>
      </div>
    </div>
  </div>
</template>

<script>
import MealPlanChart from "./components/MealPlanChart";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MealPlanChart
  },
  computed: {
    cashCostString() {
      return "$" + this.$store.getters.cashCost.toLocaleString();
    },
    cashCost() {
      return this.$store.getters.cashCost;
    },
    mealPlanPrice() {
      return this.$store.getters.mealPlanPrice;
    },
    numBreakfasts() {
      return this.$store.getters.numBreakfasts;
    },
    numLunches() {
      return this.$store.getters.numLunches;
    },
    numDinners() {
      return this.$store.getters.numDinners;
    },
    mealsPerWeek() {
      return this.$store.getters.mealsPerWeek;
    },
    mealsPerSemester() {
      return this.$store.getters.mealsPerSemester;
    },
    getChartData() {
      let data = [
        {
          label: "Unlimited",
          value: 2360,
          tooManyMeals: () => {
            return false;
          }
        },
        {
          label: "Sparky's Favorite",
          value: 2075,
          tooManyMeals: () => {
            return this.mealsPerWeek > 14;
          }
        },
        {
          label: "Maroon",
          value: 1710,
          tooManyMeals: () => {
            return this.mealsPerSemester > 180;
          }
        },
        {
          label: "Gold",
          value: 1260,
          tooManyMeals: () => {
            return this.mealsPerWeek > 8;
          }
        },
        {
          label: "Cash",
          value: this.cashCost
        }
      ];

      data.sort((a, b) => {
        if (a.value == b.value) {
          return 0;
        }

        if (a.value > b.value) {
          return -1;
        }

        return 1;
      });

      return {
        labels: data.map(item => item.label),
        datasets: [
          {
            label: "Semester Costs",
            backgroundColor: data.map(
              item =>
                item.label == "Cash"
                  ? "#FED106"
                  : item.tooManyMeals() ? "#D3D3D3" : "#8D383F"
            ),
            data: data.map(item => item.value)
          }
        ]
      };
    }
  },
  methods: {
    breakfastsChange: function(event) {
      const range = event.target;
      this.$store.dispatch("setNumBreakfasts", parseInt(range.value));
    },
    lunchesChange: function(event) {
      const range = event.target;
      this.$store.dispatch("setNumLunches", parseInt(range.value));
    },
    dinnersChange: function(event) {
      const range = event.target;
      this.$store.dispatch("setNumDinners", parseInt(range.value));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.input-group {
  padding: 20px 0px;
}

.gold {
  background: #fed106;
}

.gray {
  background: #d3d3d3;
}

.maroon {
  background: #8d383f;
  color: white;
}
</style>
