export function addRequest(data) {
    return {
      type: '@registration/ADD_REQUEST',
      payload: { data },
    };
  }
  
  export function addSuccess(data) {
    return {
      type: '@registration/ADD_SUCCESS',
      payload: { data },
    };
  }
  
  export function updateRequest(data) {
    return {
      type: '@registration/UPDATE_REQUEST',
      payload: { data },
    };
  }
  
  export function updateSuccess(data) {
    return {
      type: '@registration/UPDATE_SUCCESS',
      payload: { data },
    };
  }
  
  export function deleteRequest(id) {
    return {
      type: '@registration/DELETE_REQUEST',
      payload: { id },
    };
  }
  
  export function deleteSuccess(id) {
    return {
      type: '@registration/DELETE_SUCCESS',
      payload: { id },
    };
  }