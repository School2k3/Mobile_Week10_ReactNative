import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_CONTENT_REQUEST,
  fetchContentSuccess,
  ADD_CONTENT_REQUEST,
  addContentSuccess,
  UPDATE_CONTENT_REQUEST,
  updateContentSuccess,
  DELETE_CONTENT_REQUEST,
  deleteContentSuccess,
} from '../actions/contentActions';

const API_URL = 'https://645464baa74f994b333f63ab.mockapi.io/account';

function* fetchContentSaga() {
  try {
    const response = yield call(fetch, API_URL);
    const data = yield response.json();
    yield put(fetchContentSuccess(data));
  } catch (error) {
    console.error('Fetch content failed:', error);
  }
}

function* addContentSaga(action) {
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: action.payload }),
    });
    const newData = yield response.json();
    yield put(addContentSuccess(newData));
  } catch (error) {
    console.error('Add content failed:', error);
  }
}

function* updateContentSaga(action) {
  try {
    const { id, content } = action.payload;
    const response = yield call(fetch, `${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    const updatedData = yield response.json();
    yield put(updateContentSuccess(updatedData));
  } catch (error) {
    console.error('Update content failed:', error);
  }
}

function* deleteContentSaga(action) {
  try {
    yield call(fetch, `${API_URL}/${action.payload}`, { method: 'DELETE' });
    yield put(deleteContentSuccess(action.payload));
  } catch (error) {
    console.error('Delete content failed:', error);
  }
}

export default function* contentSaga() {
  yield takeEvery(FETCH_CONTENT_REQUEST, fetchContentSaga);
  yield takeEvery(ADD_CONTENT_REQUEST, addContentSaga);
  yield takeEvery(UPDATE_CONTENT_REQUEST, updateContentSaga);
  yield takeEvery(DELETE_CONTENT_REQUEST, deleteContentSaga);
}