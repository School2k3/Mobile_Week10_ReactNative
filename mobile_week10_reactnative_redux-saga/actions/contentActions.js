export const FETCH_CONTENT_REQUEST = 'FETCH_CONTENT_REQUEST';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const ADD_CONTENT_REQUEST = 'ADD_CONTENT_REQUEST';
export const ADD_CONTENT_SUCCESS = 'ADD_CONTENT_SUCCESS';
export const UPDATE_CONTENT_REQUEST = 'UPDATE_CONTENT_REQUEST';
export const UPDATE_CONTENT_SUCCESS = 'UPDATE_CONTENT_SUCCESS';
export const DELETE_CONTENT_REQUEST = 'DELETE_CONTENT_REQUEST';
export const DELETE_CONTENT_SUCCESS = 'DELETE_CONTENT_SUCCESS';

export const fetchContentRequest = () => ({ type: FETCH_CONTENT_REQUEST });
export const fetchContentSuccess = (data) => ({ type: FETCH_CONTENT_SUCCESS, payload: data });

export const addContentRequest = (content) => ({ type: ADD_CONTENT_REQUEST, payload: content });
export const addContentSuccess = (content) => ({ type: ADD_CONTENT_SUCCESS, payload: content });

export const updateContentRequest = (id, content) => ({
  type: UPDATE_CONTENT_REQUEST,
  payload: { id, content },
});
export const updateContentSuccess = (content) => ({
  type: UPDATE_CONTENT_SUCCESS,
  payload: content,
});

export const deleteContentRequest = (id) => ({ type: DELETE_CONTENT_REQUEST, payload: id });
export const deleteContentSuccess = (id) => ({ type: DELETE_CONTENT_SUCCESS, payload: id });
