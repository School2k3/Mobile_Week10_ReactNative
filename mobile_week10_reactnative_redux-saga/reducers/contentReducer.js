import {
  FETCH_CONTENT_SUCCESS,
  ADD_CONTENT_SUCCESS,
  UPDATE_CONTENT_SUCCESS,
  DELETE_CONTENT_SUCCESS,
} from '../actions/contentActions';

const initialState = {
  items: [],
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTENT_SUCCESS:
      return { ...state, items: action.payload };
    case ADD_CONTENT_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_CONTENT_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_CONTENT_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}