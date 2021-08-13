import * as actionTypes from "../../constants/actionTypes";

export const getList = () => {
  return { type: actionTypes.GET_LIST };
};
export const getContact = (data) => {
  return { type: actionTypes.GET_CONTACT, data };
}
export const postList = (data) => {
  return { type: actionTypes.POST_LIST, data };
};
export const putList = (data) => {
  return { type: actionTypes.PUT_LIST, data };
};
export const delList = (data) => {
  return { type: actionTypes.DEL_LIST, data };
};

export const resetInfo = () => {
  return { type: actionTypes.RESET_INFO };
};
export const setList = (data) => {
  return { type: actionTypes.SET_LIST, payload: data };
};
