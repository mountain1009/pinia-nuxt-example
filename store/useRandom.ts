import {defineStore} from 'pinia'

export const useRandom = defineStore('randomId', {
  state: () => {
    return{
      count: 0
    }
  },
  getters:{
    numberCount: (state): number => state.count,
  },
  actions: {
    gene(): void{
      this.$state.count = Math.random()
    },
  }
})
