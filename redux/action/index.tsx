import { USE_API } from "./actionTypes";

export const useApiAction = (payload: any) => (
  {
    type: USE_API,
    payload,
  }
);