export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const CANCEL_TODO = 'CANCEL_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_LIST = 'FETCH_LIST';

function handleResponse(response){
  if (response.ok) {
    return response.json();
  } else  {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function todoCreated(newitem){
  return {
    type: CREATE_TODO,
    newitem
  }
}

function todoUpdated(item){
  return {
    type: SAVE_TODO,
    item
  }
}

function listFetched(items){
  return {
    type: FETCH_LIST,
    items
  }
}

function todoEdited(id){
  return {
    type: EDIT_TODO,
    id
  }
}

function todoCancelled(id){
  return {
    type: CANCEL_TODO,
    id
  }
}

function todoDeleted(item){
  return {
    type: DELETE_TODO,
    item
  }
}

export function editTodo(id){
  return dispatch => {
    dispatch(todoEdited(id))
  }
}

export function cancelTodo(id){
  return dispatch => {
    dispatch(todoCancelled(id))
  }
}

export function fetchList(){
  return dispatch => {
    fetch('/api/list')
      .then(res => res.json())
      .then(data => dispatch(listFetched(data.list)))
  }
}

export function createTodo(item){
  return dispatch => {
    return fetch('/api/li/create', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(handleResponse)
      .then(item => dispatch(todoCreated(item)))
  }
}

export function saveTodo(data){
  return dispatch => {
    return fetch('/api/li/save', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(handleResponse)
      .then(item => dispatch(todoUpdated(item)))
  }
}

export function deleteTodo(id){
  return dispatch => {
    return fetch('/api/li/delete', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(handleResponse)
      .then(item => dispatch(todoDeleted(item)))
  }
}
