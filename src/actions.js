export const CREATE_LIST = 'CREATE_LIST';

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

export function listCreated(newitem){
  return {
    type: CREATE_LIST,
    newitem
  }
}

export function createList(item){
  console.log(JSON.stringify(item));
  return dispatch => {
    return fetch('/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(handleResponse)
      .then(item => dispatch(listCreated(item)))
  }
}
//
// export function createList(newitem){
//   return dispatch => {
//     fetch('/ge')
//     .then(res => res.json())
//     .then(item => dispatch(listCreated(item)))
//   }
// }
