// setup関数外の外から、storeを呼び出す
import {useNumber} from '~/store/useNumber'

export const increment = () => {
  const store = useNumber()
  store.increment()
}


export const decrement = () => {
  const store = useNumber()
  store.decrement()
}
