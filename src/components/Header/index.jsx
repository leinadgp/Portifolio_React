import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container, Menu, Li } from "./styles";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detecta clique fora do menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Alterar background do header no scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!changeBackground && window.scrollY > 80) {
        setChangeBackground(true);
      }
      if (changeBackground && window.scrollY <= 80) {
        setChangeBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [changeBackground]);

  return (
    <Container $changeBackground={changeBackground}>
      <button
        ref={buttonRef}
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>
      <Menu $isMobileOpen={isMobileMenuOpen} ref={menuRef}>
        <Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes('/projetos')}>
          <Link to="/projetos">Projetos</Link>
        </Li>
        <Li $isActive={pathname.includes('/sobre')}>
          <Link to="/sobre">Sobre</Link>
        </Li>
        <Li $isActive={pathname.includes('/contato')}>
          <Link to="/contato">Contato</Link>
        </Li>
        <Li $isActive={pathname.includes('/certificados')}>
          <Link to="/certificados">Certificados</Link>
        </Li>
      </Menu>
    </Container>
  )
}
export default Header
