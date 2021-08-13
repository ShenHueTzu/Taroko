import produce from "immer";

import {
  GET_LIST,
  GET_LIST_SUC,
  GET_LIST_FAIL,
  GET_CONTACT_SUC,
  RESET_INFO,
  SET_LIST,
} from "../../constants/actionTypes";

const initialState = {
  list: null,
  isFetching: false,

  infos: null,
};

const common = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_LIST:
        draft.isFetching = true;
        break;
      case GET_LIST_SUC:
        draft.isFetching = false;
        draft.list = action.payload;
        break;
      case GET_LIST_FAIL:
        draft.isFetching = false;
        break;
      case GET_CONTACT_SUC:
        draft.infos = action.payload;
        break;
      
      case RESET_INFO:
        draft.infos = null;
        break;
      case SET_LIST:
        draft.list = action.payload;
        break;

      default:
        break;
    }
  });

export default common;
