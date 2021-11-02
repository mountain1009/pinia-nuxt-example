import {defineStore} from 'pinia'

export const useTodo = defineStore('todoId', {
  state: () => {
    return{
      items: []
    }
  },
  getters:{
    items: state => state.items
  },
  actions: {
    create(){
      console.log("create")
    },
    update(){
      console.log("updates")
    },
    remove(){
      console.log("remove")
    }
  }
})
