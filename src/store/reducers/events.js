import * as CONSTANT from '../actions/constants'

const initialState = {
  '2019-05-15': [{name: 'valod'}],
  '2019-05-20': [],
  '2019-05-24': [{name: 'gago'}],
  '2019-07-24': [{name: 'gago'}],
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.GET_EVENTS:
      return action.data;
    default:
      return state;
  }
}