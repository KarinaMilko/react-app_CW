import { useContext } from "react";
import { ThemeContext, UserContext } from "../../context";
import CONSTANS from "./../../constants";

const { LIGHT, DARK, BLUE } = CONSTANS.THEME;

function UserHeader() {
  const { firstName } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = ({ target: { value } }) => setTheme(value);

  return (
    <header>
      {theme} Hello, {firstName}
      <select value={theme} onChange={changeTheme}>
        <option value={LIGHT}>Light</option>
        <option value={DARK}>Dark</option>
        <option value={BLUE}>Blue</option>
      </select>
    </header>
  );
}
export default UserHeader;
