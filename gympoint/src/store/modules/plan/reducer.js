import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  plan: {},
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@plan/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/GET_SUCCESS': {
        draft.plan = action.payload.data.data;
        draft.loading = false;
        break;
      }
      case '@plan/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/ADD_SUCCESS': {
        draft.loading = true;
        break;
      }
      default:
    }
  });
}
