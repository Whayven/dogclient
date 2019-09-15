import axios from "axios";
const url = "http://dog-balancer-291881508.us-east-1.elb.amazonaws.com/dogs";
const pic_url = "https://dog.ceo/api/breed";

const state = {
  dogs: [],
  candidates: [],
  image: "",
  voted: false
};

const getters = {
  allDogs: state => state.dogs,
  allCandidates: state => state.candidates,
  image: state => state.image,
  voted: state => state.voted
};

const actions = {
  async fetchDogs({ commit }) {
    const response = await axios.get(url);
    commit("setDogs", response.data);
  },
  async fetchCandidates({ commit }) {
    const response = await axios.get(`${url}/candidates`);
    commit("setCandidates", response.data);
  },
  async fetchImage({ commit }, breed) {
    breed = breed.toLowerCase();
    if (breed.includes(" ")) {
      breed = breed
        .split(" ")
        .reverse()
        .join("/");
    }
    const response = await axios.get(`${pic_url}/${breed}/images/random`);
    commit("setImage", response.data.message);
  },
  async updateDog({ commit }, updDog) {
    await axios.put(`${url}/${updDog._id}`);
    commit("setVote");
  },
  vote({ commit }) {
    commit("setVote");
  }
};

const mutations = {
  setDogs: (state, dogs) => (state.dogs = dogs),
  setCandidates: (state, dogs) => (state.candidates = dogs),
  setImage: (state, url) => (state.image = url),
  setVote: state => (state.voted = true)
};

export default {
  state,
  getters,
  actions,
  mutations
};
