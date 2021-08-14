import { call, put, takeEvery } from "redux-saga/effects";
import * as listApi from "../../apis/list";
import * as actionTypes from "../../constants/actionTypes";
import * as commonTypes from "../../constants/commonTypes";

function* getList() {
  try {
    const res = yield call(listApi.getList);

    if (res.data) {
      yield put({ type: actionTypes.GET_LIST_SUC, payload: res.data });
      return;
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_LIST_FAIL });
    console.log(error);
  }
}

function* getContact({ data }) {
  try {
    const res = yield call(listApi.getContact, data);

    if (res.data) {
      yield put({ type: actionTypes.GET_CONTACT_SUC, payload: res.data });
      return;
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_CONTACT_FAL });
    console.log(error);
  }
}

function* postList({ data }) {
  try {
    const res = yield call(listApi.postList, data);

    if (res.data) {
      yield put({ type: actionTypes.POST_LIST_SUC });
      yield put({ type: actionTypes.GET_LIST });
      const toastType = "contactCreateSuc";
      yield put({ type: commonTypes.OPEN_TOAST, payload: { toastType } });
      return;
    }
  } catch (error) {
    yield put({ type: actionTypes.POST_LIST_FAL });
    const toastType = "contactCreateFal";
    yield put({ type: commonTypes.OPEN_TOAST, payload: { toastType } });
    console.log(error);
  }
}

function* putList({ data }) {
  try {
    const res = yield call(listApi.putList, data);

    if (res.data) {
      yield put({ type: actionTypes.PUT_LIST_SUC });
      yield put({ type: actionTypes.GET_LIST });

      const toastType = "contactUpdateSuc";
      yield put({ type: commonTypes.OPEN_TOAST, payload: { toastType } });
      return;
    }
  } catch (error) {
    yield put({ type: actionTypes.PUT_LIST_FAL });
    const toastType = "contactUpdateFal";
    yield put({ type: commonTypes.OPEN_TOAST, payload: { toastType } });
    console.log(error);
  }
}

function* delList({ data }) {
  try {
    console.log(data);
    const res = yield call(listApi.delList, data);

    if (res.data) {
      yield put({ type: actionTypes.DEL_LIST_SUC });
      yield put({ type: actionTypes.GET_LIST });
      const toastType = "contactDeleteSuc";
      yield put({ type: commonTypes.OPEN_TOAST, payload: { toastType } });
      return;
    }
  } catch (error) {
    yield put({ type: actionTypes.DEL_LIST_FAL });
    const toastType = "contactDeleteFal";
      yield put({ type: commonTypes.OPEN_TOAST, payload: { toastType } });
    console.log(error);
  }
}

export default [
  takeEvery(actionTypes.GET_LIST, getList),
  takeEvery(actionTypes.GET_CONTACT, getContact),
  takeEvery(actionTypes.POST_LIST, postList),
  takeEvery(actionTypes.PUT_LIST, putList),
  takeEvery(actionTypes.DEL_LIST, delList),
];
