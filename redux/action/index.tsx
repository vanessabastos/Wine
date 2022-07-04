import { USE_API } from "./actionTypes";

export const UseApiAction = (payload: any) => (
  {
    type: USE_API,
    payload,
  }
);