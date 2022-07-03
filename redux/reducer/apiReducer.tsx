import { HYDRATE } from 'next-redux-wrapper';
import { USE_API } from '../action/actionTypes';

interface API {
  data: {
    page: number,
    totalPages: number,
    itemsPerPage: number,
    totalItems: number,
    items: [],
  },
}

const initialState: API = {
  data: {
    page: 0,
    totalPages: 0,
    itemsPerPage: 0,
    totalItems: 0,
    items: [],
  },
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        data: {
          ...action.payload,
        }
      }
    case USE_API:
      return {
        ...state,
        data: {
          ...action.payload,
        }
      }
    default:
      return state;
  }
}

export default reducer;
