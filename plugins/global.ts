import { onGlobalSetup } from '@nuxtjs/composition-api'

export default () => {
  onGlobalSetup(() => {
    console.log("onGlobalSetup")
  })
}
