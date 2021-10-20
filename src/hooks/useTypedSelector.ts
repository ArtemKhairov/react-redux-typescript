import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector


// Обычный useSelector плохо работает с типами
// создаём кастомный хук  