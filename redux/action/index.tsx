import { USE_API, ADD_BAG } from "./actionTypes";

export const UseApiAction = (payload: any) => (
  {
    type: USE_API,
    payload,
  }
);

export const shoppingBagAction = (payload: any) => (
  {
    type: ADD_BAG,
    payload,
  }
);