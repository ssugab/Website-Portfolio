import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from "../constants";

import { FaTimes } from "react-icons/fa"; 
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  useEffect(() => { //Prevent background scrolling when menu is open
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, href) => { //Ensure smooth scroll and menu close:
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if(targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-4 backdrop-blur-lg drop-shadow-custom transition-all duration-300 lg:flex hover:drop-shadow-custom-purple">
          <div className="flex items-center justify-between gap-20">
            <div>
              <a href="#">
                <img src={logo} width={130} alt="logo" className="mr-10"/>
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-6">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a className="text-sm hover:text-purple-400" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                      {item.label}
                    </a>
                  </li>
                ) )}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg lg:hidden">
            <div className="flex items-center justify-between bg-purple-950/20 backdrop-blur-md rounded-lg">
              <div>
                <a href="#">
                  <img src={logo} alt="logo" width={90} className="m-2"/>
                </a>  
              </div>

              <div className="flex items-center">
                <button className="focus:outline-none lg:hidden transition-transform duration-300 hover:scale-110" onClick={toggleMobileMenu}>
                  {isMobileMenuOpen ? (
                    <FaTimes className="m-2 h-6 w-5" /> 
                  ) : (
                    <FaBars className="m-2 h-6 w-5" />
                  )}
                </button>
              </div>
            </div>
            
              <ul className={`absolute left-0 right-0 ml-4 mt-2 flex flex-col gap-4 bg-purple-950/30 backdrop-blur-md border border-white/10 rounded-lg p-4 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-4 opacity-0 pointer-events-none'
              }`}>
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="block w-full text-lg " onClick={(e) => handleLinkClick(e, item.href)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
          </div>

      </nav>
    </div>
  )
}

export default Navbar