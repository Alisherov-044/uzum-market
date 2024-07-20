import { RootState } from "@/redux/store";
import { useSelector as useReduxSelector } from "react-redux";

export function useSelector<T>(callbackFn: (state: RootState) => T) {
  return useReduxSelector(callbackFn);
}
