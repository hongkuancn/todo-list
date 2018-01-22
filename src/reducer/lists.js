import { CREATE_LIST } from '../actions';

export default function(state=[], action={}){
  switch (action.type) {
    case CREATE_LIST:
      return [
        ...state,
        action.newitem        
      ]
    default: return state;
  }
}
