export function addRequest(data) {
    return {
      type: '@student/ADD_REQUEST',
      payload: { data },
    };
  }
  
  export function addSuccess(data) {
    return {
      type: '@student/ADD_SUCCESS',
      payload: { data },
    };
  }
  
  export function updateRequest(data, id) {
    return {
      type: '@student/UPDATE_REQUEST',
      payload: { data, id },
    };
  }
  
  export function updateSuccess(data) {
    return {
      type: '@student/UPDATE_SUCCESS',
      payload: { data },
    };
  }
  
  export function deleteRequest(id) {
    return {
      type: '@student/DELETE_REQUEST',
      payload: { id },
    };
  }
  
  export function deleteSuccess(id) {
    return {
      type: '@student/DELETE_SUCCESS',
      payload: { id },
    };
  }