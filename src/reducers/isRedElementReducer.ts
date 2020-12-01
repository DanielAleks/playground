import { TOGGLE_RED } from './types'

const initialState = false

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TOGGLE_RED:
      return !state

    default:
      return state
  }
}