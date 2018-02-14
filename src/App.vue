<template>
  <div id="app">
    <div class="input-group">
      <input v-on:change="breakfastsChange" type="range" min="0" max="7" value="3" name="breakfasts" id="numBreakfasts">
      <input v-on:change="lunchesChange" type="range" min="0" max="7" value="3" name="lunches" id="numLunches">
      <input v-on:change="dinnersChange" type="range" min="0" max="7" value="3" name="dinners" id="numDinners">

      <select v-on:change="mealPlanChange">
        <option value="1932.5">Sparky's Favorite</option>
        <option value="2210">Unlimited</option>
        <option value="1587.5">Maroon</option>
        <option value="1177.5">Gold</option>
      </select>
    </div>

    <div id="results">
      <p>Cash Cost: {{cashCost}}</p>
      <p>Meal Plan Cost: {{mealPlanPrice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  computed: {
    cashCost() {
      return this.$store.getters.cashCost;
    },
    mealPlanPrice() {
      return this.$store.getters.mealPlanPrice;
    }
  },
  methods: {
    mealPlanChange: function(event) {
      const select = event.target;
      const cost = parseFloat(select.options[select.selectedIndex].value);
      this.$store.dispatch("setMealPlanPrice", cost);
    },
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
  margin-top: 60px;
}
</style>
