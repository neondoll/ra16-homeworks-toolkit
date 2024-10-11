import Paths from "../paths";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const linkClassName = "relative grow leading-[3rem] text-center no-underline uppercase text-white border-b-[0.2rem] "
    + "border-solid border-transparent cursor-pointer opacity-60 hover:border-[hsl(60,50%,50%)] hover:opacity-100 "
    + "[&.active]:border-[hsl(120,50%,50%)] [&.active]:opacity-100";

  return (
    <nav className="flex bg-[#361f36] shadow-[0_0_1rem_rgba(0,0,0,0.5)]">
      <NavLink className={linkClassName} to={Paths.HOME}>Поиск</NavLink>
      <NavLink className={linkClassName} to={Paths.FAVORITES}>Избранное</NavLink>
    </nav>
  );
}
