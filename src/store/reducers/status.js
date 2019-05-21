import * as CONSTANT from '../actions/constants'

const initialState = {
  loading: false,
}

export default function status(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.UPDATE_STATUS:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state;
  }
}