import "./dashboard.css";
import SideBar, { menuItems } from "./components/SideBar";
import MainPage, {createdClasses, joinedClasses} from "./components/MainPage";

import {Routes, Route } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <Routes>
        <SideBar
          onChange={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
        />
        <div className={'container'}>
          <ol className={'joined'}>
            {createdClasses.map((item) => (
              <MainPage classData={item} />
            ))}

            {joinedClasses.map((item) => (
              <MainPage classData={item} />
            ))}
          </ol>
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                    </Route>
                  ))
                : null}
            </>
          ))}
        </div>
        
      </Routes>
    </div>
  );
}

export default Dashboard;