import { DECREMENT } from "./types"
import { INCREMENT } from "./types"

const initialState = 0

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1

    default:
      return state
  }
}
