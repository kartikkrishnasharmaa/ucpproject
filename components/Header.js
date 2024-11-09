import { useState } from 'react';

import Link from "next/link";
import Image from "next/image";
const Header = () => {
  // const [ click, setClick ] = React.useState( false );
  // const handleClick = () => setClick( !click );
  // const Close = () => setClick( false );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false); // Close submenu when toggling menu
  };
  const NavItem = ({ children, ...props }) => {
    return (
      <div className="relative group" {...props}>
        <button className="px-3 py-2 hover:bg-gray-200  hover:border-blue-700 font-bold">{children}</button>
      </div>
    );
  };
  
  // Navbar item component for mobile
  const NavItemMobile = ({ children, ...props }) => {
    return (
      <div className="relative group" {...props}>
        <button className="block px-3 py-2 hover:bg-gray-200 w-full text-left">{children}</button>
      </div>
    );
  };
  
  // Submenu component with grid layout for desktop
  // const SubMenu = () => {
  //   return (
  //     <div className="absolute mt-2 w-96 h-96 bg-gray-100 rounded-md shadow-lg">
  //       <div className="grid grid-cols-2 gap-2">
  //         {/* Submenu items */}
          
  //           <SubMenuItem> <Link href=""> Angular Js</Link></SubMenuItem>
  //           <SubMenuItem> <Link href=""> Blockchain</Link></SubMenuItem>
  //           <SubMenuItem> <Link href="">Cloud Computing </Link></SubMenuItem>
  //           <SubMenuItem> <Link href="">Ethical Hacking </Link></SubMenuItem>
  //           <SubMenuItem> <Link href="">Operating System </Link></SubMenuItem>
  //           <SubMenuItem> <Link href=""> </Link></SubMenuItem>
  //           <SubMenuItem> <Link href=""> </Link></SubMenuItem>


  //       </div>
  //     </div>
  //   );
  // };
  
  // Submenu component for mobile
  // const SubMenuMobile = () => {
  //   return (
  //     <div className="pl-6">
  //       {Array.from({ length: 9 }).map((_, index) => (
  //         <SubMenuItem key={index}>Service {index + 1}</SubMenuItem>
  //       ))}
  //     </div>
  //   );
  // };
  
  // Submenu item component
  // const SubMenuItem = ({ children }) => {
  //   return (
  //     <div className="px-4 py-2 flex flex-col w-full hover:font-bold rounded-md">{children}</div>
  //   );
  // };

  return (
    <>
      <header className="sticky top-0 bg-white z-10 shadow-md">
     
      <nav className="p-3 bg-white">
      <div className="flex justify-between items-center">
      <Link href="/" className="nav-logo mt-1">
                <Image src="/Images/logo.png" width="140" alt="logo" height="10" />
              </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-16 mr-16">
          {/* Main Navbar Items */}
          <NavItem><Link href="/">Home</Link>
            </NavItem>
            <NavItem><Link href="/glossary">Computer Dictionary</Link>
            </NavItem> 
            <NavItem><Link href="/cheatsheet">CheatSheet</Link>
            </NavItem> 
          <NavItem><Link href="/mcq">MCQ</Link>
            </NavItem>
            <NavItem><Link href="/test">Test</Link>
            </NavItem>
            <NavItem><Link href="/interview-question">Interview Preparation</Link>
            </NavItem>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-md">
          <div className="flex flex-col space-y-4">
          <NavItem><Link href="/">Home</Link>
            </NavItem>
            <NavItem><Link href="/glossary">Computer Dictionary</Link>
            </NavItem>
            <NavItem><Link href="/cheatsheet">CheatSheet</Link>
            </NavItem> 
          <NavItem><Link href="/mcq">MCQ</Link>
            </NavItem>
            <NavItem><Link href="/test">Test</Link>
            </NavItem>
            <NavItem><Link href="/interview-question">Interview Preparation</Link>
            </NavItem>
            {/* <NavItemMobile onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
              Services
            </NavItemMobile> */}
            {/* {isSubMenuOpen && <SubMenuMobile />} */}
          
          </div>
        </div>
      )}
    </nav>
      </header>
      {/* <slideheade>
        <div className="horizontal_wrapper ">
          <div className="horizontal_nav_left">
            <Link href="/" className="horizontal_item">HTML</Link>
            <Link href="/" className="horizontal_item" >CSS</Link>
            <Link href="/" className="horizontal_item">JavaScript</Link>
            <Link href="/" className="horizontal_item">React</Link>
            <Link href="/" className="horizontal_item">Vue</Link>
            <Link href="/" className="horizontal_item">Angular</Link>
            <Link href="/" className="horizontal_item">Node</Link>
            <Link href="/" className="horizontal_item">Express</Link>
          </div>
        </div>

      </slideheade> */}
    </>
  );
};

export default Header;
