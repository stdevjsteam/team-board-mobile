import * as CONSTANT from '../actions/constants'

const initialState = {}

export default function news(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.GET_NEWS:
      return action.data;
    default:
      return state;
  }
}