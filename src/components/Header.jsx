import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/slices/counterSlice";

const Header = () => {
    const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between mb-3 p-4">
      <h2>Redux Toolkit</h2>
      <button onClick={() => dispatch(changeTheme())}>
        Temayı Değiş
      </button>
    </div>
  );
};

export default Header;
