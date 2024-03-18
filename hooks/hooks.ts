import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, RootState } from "@/provider/Store";


export const useAppDispatcher = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>()
