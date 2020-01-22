import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  reload: false
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help-order/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@help-order/UPDATE_SUCCESS': {
        draft.loading = false;
        draft.reload = !draft.reload
        break;
      }
      default:
    }
  });
}
