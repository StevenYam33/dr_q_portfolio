import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

import { Logo } from "../../Assets/Images/Logo/Logo";
import { motion} from "framer-motion";

import Resume from "../Resume/Resume";

function Navigation({openModal}) {
    const [showMenu, setShowMenu] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        if (window.innerWidth <= 850){
            setShowMenu(!showMenu);
        }
    };

    const menuOff = () => {
        setShowMenu(false);
    };

    // set up animations
    const sidebar ={
        open:{
            clipPath: `circle(${2000 * 2 + 200}px at 50% 50%)`,

            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: window.innerWidth <= 850 ? "circle(50% at 50% 50%)" : "circle(300%)",

            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    };

    const list = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
          },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      }
      
      const item = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: window.innerWidth <= 850 ? 50 : 0,
            opacity: window.innerWidth <= 850 ? 0 : 1,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    }

    useEffect(() => {
        const NavOverlay = document.querySelector('.nav-overlay');

        const handleWindowResize = () => {
            if (window.innerWidth > 850 && showMenu){
                menuOff();
            } else if (window.innerWidth <= 850 && navRef.current.style.clipPath !== "circle(50% at 50% 50%)" && !showMenu) {
                navRef.current.style.clipPath = "circle(50% at 50% 50%)";
                document.querySelectorAll('.nav-list-item').forEach(NavListItem =>{
                    NavListItem.style.opacity = 0;
                    NavListItem.style.transform = "translateY(50px) translateZ(0px)";
                } )
            } else if (window.innerWidth > 850 && navRef.current.style.clipPath !== "circle(300%)") {
                navRef.current.style.clipPath = "circle(300%)";
                document.querySelectorAll('.nav-list-item').forEach(NavListItem =>{
                    NavListItem.style.opacity = 1;
                    NavListItem.style.transform = "none";
                } )
            } 
        }

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) ) {
                menuOff();
            }
        };

        if (window.innerWidth <= 850 && showMenu) {
            // document.documentElement.style.overflowY = "hidden";
            document.body.style.overflowY = "hidden";
            NavOverlay.addEventListener('clic k', handleClickOutside);
        } else {
            // document.documentElement.style.overflowY = "auto";
            document.body.style.overflowY = 'auto'; 
            NavOverlay.removeEventListener('click', handleClickOutside);
        }

        window.addEventListener('resize', handleWindowResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [showMenu]);

    return(
        <header id="navigation">
            <motion.div 
                className={`nav-overlay ${showMenu ? 'active' : ''}`} 
            >
                <nav className="nav-container"> 
                    <Link to="/" onClick={menuOff} >
                        <motion.div
                            whileHover={{scale:1.1}}
                            whileTap={{scale: 0.9}}
                            className="nav-left"
                        >
                            <Logo className="logo"/>
                            <h1>Dr. Q</h1>
                        </motion.div>
                    </Link>

                    <motion.div 
                        className="nav-mid" 
                        ref={navRef}
                        initial={false}
                        animate={showMenu ? "open" : "closed"}
                        variants={sidebar}
                    >
                        <motion.div 
                            whileHover={{scale:1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleMenu}
                            className="nav-ham" 
                        >
                            <motion.div className="nav-ham-top" animate={{rotate: showMenu ? -45 : 0, y: showMenu ? 7.5 : 0}}></motion.div>
                            <motion.div className="nav-ham-middle" animate={{opacity: showMenu ? 0 : 1}}></motion.div>
                            <motion.div className="nav-ham-bot" animate={{rotate: showMenu ? 45 : 0, y: showMenu ? -7.5 : 0}}></motion.div>
                        </motion.div>
                        <motion.ul 
                            className={`nav-list ${showMenu ? 'active' : ''}`} 
                            variants={list}
                        >
                            <motion.li variants={item} className="nav-list-item">
                                <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                            </motion.li>
                            <motion.li variants={item} className="nav-list-item">
                                <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
                            </motion.li>
                            <motion.li variants={item} className="nav-list-item">
                                <Link to="/gallery" className="nav-link" onClick={toggleMenu}>Gallery</Link>
                            </motion.li>
                            <motion.li variants={item} className="nav-list-item">
                                <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
                            </motion.li>
                            <motion.li variants={item} className="nav-list-item">
                                <Link 
                                    className="resume-button" 
                                    onClick={() => {
                                        toggleMenu()
                                        openModal(<Resume />)
                                    }}
                                >
                                    resume
                                </Link>
                            </motion.li>
                        </motion.ul>
                    </motion.div>                  
            

                    <Link 
                        className="resume-button right" 
                        onClick={() => {
                            toggleMenu()
                            openModal(<Resume />)
                        }}
                    >
                        resume
                    </Link>
                </nav>

            </motion.div>
        </header>
    );
}

export default Navigation;

// need to add animation for hamburger menu button