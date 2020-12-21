import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: JSON.parse(localStorage.getItem('cities') || '[]'),
    cards: JSON.parse(localStorage.getItem('cards') || '[]')
  },
  mutations: {
    addCity(state, city: string){
      if(!state.cities.includes(city)) {
        // @ts-ignore
        state.cities.push(city)
        localStorage.setItem('cities', JSON.stringify(state.cities))
      }
    },
    getWeather(state, weather){
      if(!state.cards.some((e: any ): void => {
          e.id === weather.id
      })) {
        state.cards.push(weather)
        localStorage.setItem('cards', JSON.stringify(state.cards))
      }
    },
    deleteCity(state, city: string){
      const inx = state.cities.indexOf(city);
      state.cities.splice(inx, 1)
      state.cards.splice(inx, 1)
      localStorage.setItem('cities', JSON.stringify(state.cities))
      localStorage.setItem('cards', JSON.stringify(state.cards))
    }
  },
  actions: {
    addCity({commit}, city: string) {
      commit('addCity', city)
    },
    getWeather({commit}, city: string){
      if(typeof city != "string") {
        commit('getWeather', city)
      }else {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07b1b55e77723024c22b03a635c3c661&units=metric`)
            .then(response => {
                  commit('getWeather', response.data)
                }
            )
            .catch(err => console.log(err))
      }
    },
    deleteCity({commit}, city: string){
        commit('deleteCity', city)
    }
  },
  getters: {
    cities(state){
      return state.cities
    },
    cards(state){
      return state.cards
    }
  },
  modules: {}
});



