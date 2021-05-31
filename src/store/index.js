import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cars: []
  },
  getters: {
    cars(state){ return state.cars }
  },
  mutations: {
    toCars(state,payload){ state.cars.push(payload) },
    allCars(state,payload){ state.cars = payload }
  },
  actions: {
    newCar(context,newC){
      axios.post('http://localhost:3000/cars',newC)
          .then(response => { context.commit('toCars',response.data) })
    },
    getCars(context){
      axios.get('http://localhost:3000/cars')
      .then(response => { context.commit('allCars',response.data) })
    }
  }
})
