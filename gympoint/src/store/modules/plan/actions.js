export function addRequest(data) {
  return {
    type: '@plan/ADD_REQUEST',
    payload: { data },
  };
}

export function addSuccess(data) {
  return {
    type: '@plan/ADD_SUCCESS',
    payload: { data },
  };
}

export function updateRequest(data) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateSuccess(data) {
  return {
    type: '@plan/UPDATE_SUCCESS',
    payload: { data },
  };
}

export function deleteRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteSuccess(id) {
  return {
    type: '@plan/DELETE_SUCCESS',
    payload: { id },
  };
}
