import "./index.css";
import { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenuHandler = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav>
      <div className="container">
        <span className="nav__phone">+7 (908) 133-22-03</span>
        <span
          className={isMenuOpen ? "nav__button active" : "nav__button"}
          onClick={toggleMenuHandler}
        />
        <div className={isMenuOpen ? "nav__case open" : "nav__case"}>
          <a href="/" className="nav__item" onClick={toggleMenuHandler}>
            Главная
          </a>
          <a href="/services" className="nav__item" onClick={toggleMenuHandler}>
            Услуги
          </a>
          <a href="/contacts" className="nav__item" onClick={toggleMenuHandler}>
            Контакты
          </a>
        </div>
      </div>
    </nav>
  );
};
