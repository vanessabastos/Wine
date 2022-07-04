import { HYDRATE } from 'next-redux-wrapper';
import { USE_API } from '../action/actionTypes';

const initialState = {
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
