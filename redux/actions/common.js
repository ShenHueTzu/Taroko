import * as commonTypes from "../../constants/commonTypes";

export const openModal = (payload) => {
  return { type: commonTypes.OPEN_MODAL, payload };
};

export const closeModal = () => {
  return { type: commonTypes.CLOSE_MODAL };
};

export const openToast = (payload) => {
  return { type: commonTypes.OPEN_TOAST, payload };
};

export const closeToast = () => {
  return { type: commonTypes.CLOSE_TOAST };
};

