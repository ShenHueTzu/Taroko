import produce from "immer";

import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_TOAST,
  CLOSE_TOAST,
} from "../../constants/commonTypes";

const initialState = {
  isToast: false,

  toastType: null,
  toastData: null,

  modalType: null,
  modalData: null,
};

const common = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_TOAST:
        draft.isToast = true;
        draft.toastType = action.payload;
        draft.toastData = action.data;
        break;
      case CLOSE_TOAST:
        draft.isToast = false;
        draft.toastType = null;
        break;

      case OPEN_MODAL:
        draft.modalType = action.payload.modalType;
        draft.modalData = action.payload.modalData;
        break;
      case CLOSE_MODAL:
        draft.modalType = null;
        draft.modalData = null;
        break;

      default:
        break;
    }
  });

export default common;
        