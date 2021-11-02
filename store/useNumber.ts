import {defineStore} from 'pinia'

export const useNumber = defineStore('numberId', {
  state: () => {
    return{
      count: 0
    }
  },
  getters:{
    numberCount: (state) => state.count,
  },
  actions: {
    increment(){
      this.$state.count++
    },
    decrement(){
      this.$state.count--
    },
  }
})
