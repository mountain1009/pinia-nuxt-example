<template>
  <div>
    <p>{{count}}</p>
    <p>{{randomNumber}}</p>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <nuxt-link to='/about'>about</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
// import {useTodo} from '~/store/useTodo'
import {useNumber} from '~/store/useNumber'
import {useRandom} from '~/store/useRandom'
import {increment, decrement} from '~/utils'

export default defineComponent({
  setup(){
    // const store = useTodo()

    const store = useNumber()

    const randomStore = useRandom()

    const count = computed(() => store.numberCount)

    const randomNumber = computed(() => randomStore.numberCount)


    return {
      increment,
      decrement,
      count,
      randomNumber
    }
  }
})
</script>
