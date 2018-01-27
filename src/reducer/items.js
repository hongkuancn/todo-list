import { CREATE_TODO, FETCH_LIST, EDIT_TODO, SAVE_TODO, CANCEL_TODO, DELETE_TODO } from '../actions';

export default function(state=[], action={}){
  switch (action.type) {
    case FETCH_LIST:
      return [
        ...action.items
      ];

    case CREATE_TODO:
      return [
        ...state,
        action.newitem
      ]

    case SAVE_TODO:
      return state.map(
        item => (item._id === action.item._id ? Object.assign({}, action.item, {isEditing: false, item: action.item.item}) : item)
      )

    case DELETE_TODO:
      return state.filter(item => item._id !== action.item._id)

    case CANCEL_TODO:
      return state.map(
        item =>
          item._id === action.id ? Object.assign({}, item, {isEditing: false}) : item
      )

    case EDIT_TODO:
      return state.map(
        item =>
          item._id === action.id ? {...item, isEditing: !item.isEditing } : item
      )

    default:
      return state;
  }
}
