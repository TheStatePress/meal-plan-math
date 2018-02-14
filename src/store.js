import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numBreakfasts: 2,
    numLunches: 2,
    numDinners: 2,
    breakfastPrice: 7,
    lunchPrice: 8,
    dinnerPrice: 9,
    numWeeksInSemester: 15
  },
  mutations: {
    setNumBreakfasts: (state, payload) => {
      state.numBreakfasts = payload;
    },
    setNumLunches: (state, payload) => {
      state.numLunches = payload;
    },
    setNumDinners: (state, payload) => {
      state.numDinners = payload;
    }
  },
  actions: {
    setNumBreakfasts: ({
      commit
    }, payload) => {
      commit("setNumBreakfasts", payload);
    },
    setNumLunches: ({
      commit
    }, payload) => {
      commit("setNumLunches", payload);
    },
    setNumDinners: ({
      commit
    }, payload) => {
      commit("setNumDinners", payload);
    }
  },
  getters: {
    cashCost: state => {
      return state.numWeeksInSemester * ((state.numBreakfasts * state.breakfastPrice) + (state.numLunches * state.lunchPrice) + (state.numDinners * state.dinnerPrice));
    },
    numBreakfasts: state => {
      return state.numBreakfasts;
    },
    numLunches: state => {
      return state.numLunches;
    },
    numDinners: state => {
      return state.numDinners;
    },
    mealsPerWeek: state => {
      return state.numBreakfasts + state.numLunches + state.numDinners;
    },
    mealsPerSemester: state => {
      return state.numWeeksInSemester * (state.numBreakfasts + state.numLunches + state.numDinners);
    }
  }
});