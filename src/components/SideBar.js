import React, { useEffect, useState } from "react";
import logo from '../assets/logo/logo.png';
import user from "../assets/user.png";

import MenuItem from "./MenuItem";

export const menuItems = [
    {
      name: "Home",
      exact: true,
      to: "",
      iconClassName: "bi bi-clipboard2",
    },
    { name: "IQ Quiz", to: `/quiz`, iconClassName: "bi bi-watch" },
    { name: "Progress Card", to: `/progress`, iconClassName: "bi bi-vector-pen" },
    {
      name: "Enrolled",
      exact: true,
      to: `/enrolled`,
      iconClassName: "bi bi-book",
      subMenus: [
        { name: "Class1", to: "/enrolled/class1" },
        { name: "Class2", to: "/enrolled/class2" },
      ],
    },
    {
      name: "Teaches",
      exact: true,
      to: `/teaches`,
      iconClassName: "bi bi-postcard",
      subMenus: [
        { name: "Class1", to: "/teaches/class1" },
        { name: "Class2", to: "/teaches/class2" },
        { name: "Class3", to: "/teaches/class3" },
        { name: "Class4", to: "/teaches/class4" },
        { name: "Class5", to: "/teaches/class5" },
        { name: "Class6", to: "/teaches/class6" },
        { name: "Class7", to: "/teaches/class7" },
        { name: "Class8", to: "/teaches/class8" },
        { name: "Class9", to: "/teaches/class9" },
        { name: "Class10", to: "/teaches/class10" },
      ],
    },
  ];
 
const SideBar = (props) => {
  const [inactive, setInactive] =useState(true);
    useEffect(() => {
        if (inactive) {
          removeActiveClassFromSubMenu();
        }
      }, [inactive]);
    const removeActiveClassFromSubMenu = () => {
        document.querySelectorAll(".sub-menu").forEach((el) => {
          el.classList.remove("active");
        });
      };
      useEffect(() => {
        let menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((el) => {
          el.addEventListener("click", (e) => {
            const next = el.nextElementSibling;
            removeActiveClassFromSubMenu();
            menuItems.forEach((el) => el.classList.remove("active"));
            el.classList.toggle("active");
            console.log(next);
            if (next !== null) {
              next.classList.toggle("active");
            }
          });
        });
      }, []);
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className='top-section'>
            <div className='logo'>
                <img src={logo} alt='logo' />   
            </div>
            <div className='app-name'>Student Work<br/> Handler</div>
            <div onClick={()=>setInactive(!inactive)} className='toggle-menu-btn'>
                {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
            </div>
        </div>
        <div className='divider'></div>
        <div className="main-menu">
            <ul>
                {menuItems.map((menuItem, index) => (
                    <MenuItem
                        key={index}
                        name={menuItem.name}
                        exact={menuItem.exact}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        iconClassName={menuItem.iconClassName}
                        onClick={(e) => {
                            if (inactive) {
                                setInactive(false);
                            }   
                        }}
                    />  
                ))}
        </ul>
      </div>
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Abbas</h5>
          <p>abbasabmj53@gmail.com</p>
          <button className="button">logout</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar;