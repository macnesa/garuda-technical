import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state: {
    stations: null,
    firstNews: null
  },
  mutations: {
    setStations(state, payload) {
      state.stations = payload;
    },
    setFirstNews(state, payload) {
      state.firstNews = payload;
    }
  },
  actions: {
    async firstFetch({ commit }) {
      try {
        const requestOne = await axios.get('https://api-berita-indonesia.vercel.app/');
        commit('setStations', requestOne.data);
        
        const requestTwo = await axios.get('https://api-berita-indonesia.vercel.app/antara/terbaru');
        commit('setFirstNews', requestTwo.data);  
      } catch (error) {
        console.error(error);
      }
    }
  }
});

export default store;
