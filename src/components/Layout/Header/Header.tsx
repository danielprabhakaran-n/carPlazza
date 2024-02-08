import { NavLink } from "react-router-dom";
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={style["header"]}>
      <div className={style["logo"]}><NavLink className={style["navMenu--item"]} to={"/"}>LOGO</NavLink></div>
      <nav className={style["navMenu"]}>
        <NavLink className={style["navMenu--item"]} to={"/"}>Home</NavLink>
        <NavLink className={style["navMenu--item"]} to={"/filter-brands"}>Products</NavLink>
        <NavLink className={style["navMenu--item"]} to={"/about"}>About</NavLink>
        <NavLink className={style["navMenu--item"]} to={"/contact"}>Contact</NavLink>
      </nav>
    </header>
  );
};
export default Header;