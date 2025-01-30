import { useAppDispatch, useAppSelector } from "./redux";
import { User } from "../models/User";
import { setUserReducer } from "../redux/userSlice";

const useUser = (): [User, (user: User) => void] => {
  const dispatch = useAppDispatch();
  const setUser = (user: User) => {
    dispatch(setUserReducer(user));
  };
  const { user } = useAppSelector((state) => state.user);
  return [user, setUser];
};

export default useUser;
