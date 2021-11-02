<template>
  <div>
    <p>{{count}}</p>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <nuxt-link to='/'>HOME</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
// import {useTodo} from '~/store/useTodo'
import {useNumber} from '~/store/useNumber'

export default defineComponent({
  setup(){
    // const store = useTodo()

    const store = useNumber()

    const count = computed(() => store.numberCount)

    const increment = () => {
      store.increment()
    }

    const decrement = () => {
      store.decrement()
    }
    return {
      increment,
      decrement,
      count,
    }
  }
})
</script>
