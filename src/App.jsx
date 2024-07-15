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

import { useState } from "react";
import CategoriesList from "./components/CategoriesList";
import NavLinks from "./components/NavLinks";

const NAV_LINK = {
  icon: "/icons/learn.svg",
  menuItem: "Навчання",
  link: "#",
  hasNotifications: false,
  isActive: false,
};

function App() {
  const [navLink, setNavLink] = useState(NAV_LINK);

  return (
    <>
      {/* <NavLinks /> */}
      <NavLink navLink={navLink} setNavLink={setNavLink} />
    </>
  );
}

export default App;

function NavLink({ navLink, setNavLink }) {
  const linkStyle = {
    border: navLink.isActive ? "5px solid blue" : "",
  };

  function changeActive() {
    // navLink.isActive = !navLink.isActive

    // STATE is IMMUTABLE
    const navLinkCopy = { ...navLink };
    navLinkCopy.isActive = !navLinkCopy.isActive;
    setNavLink(navLinkCopy);
  }

  return (
    <div key={navLink.icon}>
      <a onClick={changeActive} style={linkStyle} href={navLink.link}>
        <img src={navLink.icon} /> {navLink.menuItem}
      </a>
    </div>
  );
}
