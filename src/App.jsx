// import { useState } from "react";
// import Counter from "./components/Counter";
// import Header from "./components/Header";
// import Main from "./components/Main";

// const isLogin = false;
// const user = {
//   specOffers: "You have -20% for all laptops",
// };

// function App() {
//   // return <Header />;
//   const [isLight, setIsLight] = useState(true);

//   const byttonStyle = {
//     color: isLight ? "yellow" : "grey",
//   };

//   //! move to className
//   const pageContainerStyle = {
//     minHeight: "100vh",
//     color: isLight ? "black" : "white",
//     backgroundColor: isLight ? "white" : "black",
//   };
//   function changeTheme() {
//     setIsLight((oldIsLight) => !oldIsLight);
//   }

// Створити компонент Main, де виводити або знижку або "Register for up to -50%"
// *Якщо користувач не залогінений, то знижку підсвітити червоним
//   return (
//     <div style={pageContainerStyle}>
//       <Header isLogin={isLogin} />
//       <button onClick={changeTheme} style={byttonStyle}>
//         <i className="fa-solid fa-sun"></i>
//       </button>
//       <Main isLogin={isLogin} user={user} />
//       <Counter />
//     </div>
//   );
// }

// export default App;

// const App = () => {
//   const user = { followers: 200 };
//   return <UserCard user={user}></UserCard>;
// };

// const UserCard = ({ user }) => {
//   const [followers, setFollowers] = useState(user.followers);

//   return <div>{followers}</div>;
// };

//--------------------------13.07-------------------------------------------

// function App() {
//   const numbers = [1, 2, 3, 4, 5];

//   const numbersList = numbers.map((n, index) => <li key={index}>{n}</li>);
//   console.log(numbersList);

//   return <ul>{numbersList}</ul>;
// }

// export default App;

//------------------------------------------------------------------------
// import NavLinks from "./components/NavLinks";

// function App() {
//   return <NavLinks />;
// }

// export default App;
//-------------------------------------------------------------
// import CategoriesList from "./components/CategoriesList";
// import NavLinks from "./components/NavLinks";

// function App() {
//   return (
//     <>
//       <NavLinks />
//       <CategoriesList />
//       <NavLink navLink={navLink} setNavLink={setNavLink} />
//     </>
//   );
// }

// export default App;
//=============================================================

// import { useState } from "react";
// import CategoriesList from "./components/CategoriesList";
// import NavLinks from "./components/NavLinks";

// const NAV_LINK = {
//   icon: "/icons/learn.svg",
//   menuItem: "Навчання",
//   link: "#",
//   hasNotifications: false,
//   isActive: false,
// };

// function App() {
//   const [navLink, setNavLink] = useState(NAV_LINK);

//   return (
//     <>
//       {/* <NavLinks /> */}
//       <NavLink navLink={navLink} setNavLink={setNavLink} />
//     </>
//   );
// }

// export default App;

// function NavLink({ navLink, setNavLink }) {
//   const linkStyle = {
//     border: navLink.isActive ? "5px solid blue" : "",
//   };

//   function changeActive() {
//     // navLink.isActive = !navLink.isActive

//     // STATE is IMMUTABLE
//     const navLinkCopy = { ...navLink };
//     navLinkCopy.isActive = !navLinkCopy.isActive;
//     setNavLink(navLinkCopy);
//   }

//   return (
//     <div key={navLink.icon}>
//       <a onClick={changeActive} style={linkStyle} href={navLink.link}>
//         <img src={navLink.icon} /> {navLink.menuItem}
//       </a>
//     </div>
//   );
// }
//========================================================================================
// import NavLinks from "./components/NavLinks";

// function App() {
//   return (
//     <>
//       <NavLinks />
//     </>
//   );
// }

// export default App;
//==========================14.07=================================================
// import LoginForm from "./components/LoginForm";

// function App() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }
// export default App;
//==========================14.07=========================================
// import Weather from "./components/Weather";

// function App() {
//   return (
//     <>
//       <Weather />
//     </>
//   );
// }

// export default App;
//===========================20.07============================
// import UsersPage from "./pages/UsersPage";

// function App() {
//   return (
//     <>
//       <UsersPage />
//     </>
//   );
// }

// export default App;
//===========================21.07=================================
// import ImageWrapper from "./components/ImageWrapper";

// function App() {
//   return (
//     <ImageWrapper
//       width="300px"
//       height="400px"
//       title="its image with cat"
//       // hidden
//     >
//       <img
//         src="https://storage.googleapis.com/pod_public/1300/151089.jpg"
//         alt="cat"
//       />
//     </ImageWrapper>
//   );
// }

// export default App;
//=======================================================================
// import { useState } from "react";
// import ViewPortParams from "./components/VeiwPortParams";

// function App() {
//   const [isHidden, setIsHidden] = useState(true);
//   return (
//     <>
//       <button onClick={() => setIsHidden(!isHidden)}>
//         {isHidden ? "Show" : "Hide"}
//       </button>
//       {!isHidden && <ViewPortParams />}
//     </>
//   );
// }

// export default App;
//==================================================================
// import { useState } from "react";
// import StopWatch from "./components/StopWatch";

// function App() {
//   const [isHidden, setIsHidden] = useState(true);
//   return (
//     <>
//       <button onClick={() => setIsHidden(!isHidden)}>
//         {isHidden ? "Show" : "Hide"}
//       </button>
//       {!isHidden && <StopWatch />}
//     </>
//   );
// }
// export default App;
//=============================27.07======================
// import { useContext, useState, createContext } from "react";

// const DataContext = createContext("def data");

// function App() {
//   const [data, setData] = useState("app data");

//   return (
//     <DataContext.Provider value={data}>
//       <Child />
//     </DataContext.Provider>
//   );
// }
// export default App;

// function Child() {
//   return <ChildChild />;
// }

// function ChildChild() {
//   const data = useContext(DataContext);

//   return <div>{data}</div>;
// }
//=================================================================
// import { useState } from "react";
// import classNames from "classnames";
// import { ThemeContext, UserContext } from "./context";
// import UserPage from "./pages/UserPage";
// import styles from "./App.module.sass";
// import CONSTANS from "./constants";

// const { LIGHT, DARK, BLUE } = CONSTANS.THEME;
// function App() {
//   const [user, setUser] = useState({
//     userSrc:
//       "https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-LinkedIn.jpg",
//     firstName: "Test",
//     lastName: "Testovych",
//   });
//   const [theme, setTheme] = useState(BLUE);

//   const containerClassName = classNames(styles.container, {
//     [styles.light]: theme === LIGHT,
//     [styles.dark]: theme === DARK,
//     [styles.blue]: theme === BLUE,
//   });

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <UserContext.Provider value={user}>
//         <div className={containerClassName}>
//           <UserPage />
//         </div>
//       </UserContext.Provider>
//     </ThemeContext.Provider>
//   );
// }
// export default App;

// App
//    UserPage
//         Header ('Hello, Test')
//         UserInfo (user info)
//         Footer

//=============================================================================

// import { Component } from "react";
// import CounterC from "./components/CounterC";

// class App extends Component {
//   constructor(props) {
//     super(props); // this.props

//     // const [step, setStep] = useState({step: 1})
//     this.state = {
//       step: 1,
//     };
//     // this.state.step
//   }

//   changeStep = (e) => {
//     this.setState({ step: e.target.value });
//   };
//   render() {
//     return (
//       <>
//         <input
//           type="number"
//           value={this.state.step}
//           onChange={this.changeStep}
//         />
//         <CounterC step={this.state.step} />
//       </>
//     );
//   }
// }

// export default App;

//===================================28/07================================

import { useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

{
  /* <Route path="/about" Component={About} /> */
}

const linkStyle = ({ isActive }) =>
  isActive ? { border: "5px solid green" } : {};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/partners/*" element={<PartnersPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function PartnersPage() {
  return (
    <div>
      <h1>Partners</h1>
      <nav>
        <NavLink to="partner1" style={linkStyle}>
          Partner 1
        </NavLink>
        <NavLink to="partner2" style={linkStyle}>
          Partner 2
        </NavLink>
      </nav>
      <Routes>
        <Route path="partner1" element={<div>Partner1</div>} />
        <Route path="partner2" element={<div>Partner2</div>} />
      </Routes>
    </div>
  );
}
function BasePage() {
  return (
    <>
      <Header />
      {/* Вбудуй що потрібно */}
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/partners" style={linkStyle}>
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate("/"), 2000);
    return () => clearTimeout(id);
  });

  return (
    <div>
      404 This page is not exists yet
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
function Home() {
  return (
    <>
      <div>Home</div>
    </>
  );
}

function About() {
  return <div>About</div>;
}
