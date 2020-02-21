import Vue from "vue";
import Vuex from "vuex";
import { getSteps, getCandidatures } from "./service";

Vue.use(Vuex);
const nbByPage = 100;
const actions = {
  async getSteps({ commit }) {
    const steps = await getSteps();
    commit("setSteps", steps);
  },
  async getCandidatures({ commit, state }, payload) {
    commit("setLoading", {id: payload.id, loading: true});
    const [ data, pagination ] = await getCandidatures(payload.id, state.paginations[payload.id]);
    commit("setPagination", { id: payload.id, pagination} );
    commit("setCandidatures", { id: payload.id, data });
    commit("setLoading", { id: payload.id, loading: false });
  }
};


// mutations
const mutations = {
  setSteps(state, steps) {
    state.steps = steps;
  },
  setCandidatures(state, { id, data }) {
    const updatedCandidatures = { ...state.candidatures };
    if (!updatedCandidatures[id]){
      updatedCandidatures[id] = data;
    } else {
      updatedCandidatures[id] = [ ... updatedCandidatures[id], ...data];
    }
    state.candidatures = updatedCandidatures;
  },
  updateCandidatures(state, { id, data }) {
    const updatedCandidatures = { ...state.candidatures };
      updatedCandidatures[id] = data;
      state.candidatures = updatedCandidatures;
  },
  setPagination(state, { id, pagination }) {
    const updatedPagination = { ...state.paginations };
    updatedPagination[id] = pagination + 1;
    state.paginations = updatedPagination;
  },
  setLoading(state, { id, loading }) {
    const updatedLoadings = { ...state.loadings };
    updatedLoadings[id] = loading
    state.loadings = updatedLoadings;
  },
  permuteCandidature(state, { data }){
    const updatedCandidatures = { ...state.candidatures };
    if (updatedCandidatures[data.start]){
      const permuted = updatedCandidatures[data.start].filter((el) => el.id === data.id)[0];
      console.log(permuted);
      updatedCandidatures[data.start] = [ ...updatedCandidatures[data.start].filter((el) => el.id !== data.id)];
      updatedCandidatures[data.end] = [ permuted, ...updatedCandidatures[data.end]];
      console.log(updatedCandidatures[data.start]);
      console.log(updatedCandidatures[data.end]);
      state.candidatures = updatedCandidatures;
    }
  }
};

const getters = {
  getCandidaturesFromSteps: state => id => {
    return state.candidatures[id];
  }
};

export default new Vuex.Store({
  state: {
    steps: [],
    candidatures: {},
    paginations: {},
    loadings: {}
  },
  actions,
  mutations,
  getters
});
