export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const FETCH_LIST = 'FETCH_LIST';

function handleResponse(response){
  if (response.ok) {
    console.log(response)
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
  console.log(item)
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

export function editTodo(id){
  return dispatch => {
    dispatch(todoEdited(id))
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
    return fetch('/api/list', {
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
