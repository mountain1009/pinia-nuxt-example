import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import {useRandom} from '~/store/useRandom'

export default defineNuxtPlugin(_ => {
  const store = useRandom()
  if(process.server){
    store.gene()

    console.log(store.numberCount)
  }
})
