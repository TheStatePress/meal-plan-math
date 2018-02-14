<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="meal-input col-sm-4">
        <p>Types of Meal Per Week</p>
        <div class="row">
          <div class="input-group">
            <label for="breakfasts" class="col">Breakfasts: {{numBreakfasts}}</label>
            <input v-on:change="breakfastsChange" class="col" type="range" min="0" max="7" value="3" name="breakfasts" id="numBreakfasts">
          </div> 
        </div>
        <div class="row">
          <div class="input-group">
            <label for="lunches" class="col">Lunches: {{numLunches}}</label>
            <input class="col" v-on:change="lunchesChange" type="range" min="0" max="7" value="3" name="lunches" id="numLunches">
          </div>
        </div>
        <div class="row">
          <div class="input-group">
            <label for="dinners" class="col">Dinners: {{numDinners}}</label>
            <input v-on:change="dinnersChange" class="col" type="range" min="0" max="7" value="3" name="dinners" id="numDinners">
          </div>
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
    getChartData() {
      let data = [
        {
          label: "Unlimited",
          value: 2210
        },
        {
          label: "Sparky's Favorite",
          value: 1932.5
        },
        {
          label: "Maroon",
          value: 1587.5
        },
        {
          label: "Gold",
          value: 1177.5
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
              item => (item.label == "Cash" ? "#FFD700" : "#8c383e")
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

.meal-input {
  margin-top: 100px;
}
</style>
