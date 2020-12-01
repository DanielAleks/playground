import { TOGGLE_RED } from "../reducers/types"


const superPowerRxAction = dispatch => () => {
  // const dataFetched = await fetch('', 'get')
  dispatch({ type: TOGGLE_RED, payload: 'what up home boi' })
}

export default superPowerRxAction
