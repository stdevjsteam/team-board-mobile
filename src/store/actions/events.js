import { Firebase, FirebaseRef } from 'helpers';
import * as CONSTANT from './constants';

export const getEvents = () => async dispatch => {
  dispatch({ type: CONSTANT.UPDATE_STATUS, loading: true });
  try {
    await FirebaseRef.child('events').on('value', function (snapshot) {
      console.log('value', snapshot.val());
    })
  } catch (e) {
    console.log("error", e);
  }
  dispatch({ type: CONSTANT.UPDATE_STATUS, loading: false });
}