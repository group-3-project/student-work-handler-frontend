import "./App.css";
import SideBar, { menuItems } from "./components/SideBar";
import MainPage, {createdClasses, joinedClasses} from "./components/MainPage";

import { HashRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <Router>
        <SideBar
          onChange={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
        />
        <div className={`container`}>
          <ol className={`joined`}>
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
        
      </Router>
    </div>
  );
}

export default App;