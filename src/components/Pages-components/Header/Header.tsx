import "./Header.scss";
import cn from "classnames";
import { ReactComponent as Logo } from "../../../imgs/main/clevershop.svg";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { InfoPanel } from "../../Container-components/InfoPanel/InfoPanel";
import { Socials } from "../../Container-components/Socials/Socials";
import { HeaderKit } from "./HeaderKit/HeaderKit";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={cn("header")}>
      <section className={cn("header__top-panel__container")}>
        <div className="header__top-panel container">
          <InfoPanel />
          <Socials />
        </div>
      </section>
      <section className={cn("header__bottom-panel__container")}>
        <div className="header__bottom-panel container">
          <Link to='/' ><Logo className={cn("clever-logo")} /></Link>
          <HeaderNav />
          <HeaderKit />
        </div>
      </section>
    </header>
  );
};
