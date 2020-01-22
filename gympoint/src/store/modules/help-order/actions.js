export function updateRequest(data) {
  return {
    type: '@help-order/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateSuccess() {
  return {
    type: '@help-order/UPDATE_SUCCESS'
  };
}
