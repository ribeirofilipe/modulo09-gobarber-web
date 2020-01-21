import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  isDeleting: false,
};

export default function registration(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@registration/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@registration/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@registration/ADD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/DELETE_SUCCESS': {
        draft.loading = false;
        draft.isDeleting = !draft.isDeleting;
        break;
      }
      default:
    }
  });
}
