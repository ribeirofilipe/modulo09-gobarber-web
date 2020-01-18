import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  isDeleting: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/ADD_SUCCESS': {
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
