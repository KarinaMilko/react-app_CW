import classNames from "classnames";
import styles from "./CategoriesList.module.css";

// function CategoriesList() {
//   const categories = [
//     {
//       name: "Ноутбуки, планшети та комп'ютерна периферія",
//       link: "#",
//       itemCount: 3166,
//     },
//     { name: "Смартфони, ТВ і електроніка", link: "#", itemCount: 5300 },
//     { name: "Побутова техніка", link: "#", itemCount: 4947 },
//     { name: "Напої і продукти", link: "#", itemCount: 7291 },
//     { name: "Одяг, взуття та аксесуари", link: "#", itemCount: 201568 },
//     { name: "Товари для дому", link: "#", itemCount: 19621 },
//     { name: "Спорт та туризм", link: "#", itemCount: 6620 },
//     { name: "Краса та здоров'я", link: "#", itemCount: 35273 },
//     { name: "Товари для дітей", link: "#", itemCount: 5309 },
//     { name: "Дача, сад, город", link: "#", itemCount: 714 },
//     { name: "Інструменти та автотовари", link: "#", itemCount: 4791 },
//     { name: "Канцтовари, офіс, книги", link: "#", itemCount: 2982 },
//     { name: "Сантехніка та ремонт", link: "#", itemCount: 5873 },
//     { name: "Товари для бізнесу", link: "#", itemCount: 307 },
//     { name: "Товари для свята", link: "#", itemCount: 1158 },
//     { name: "Тактичне спорядження", link: "#", itemCount: 2248 },
//     { name: "Послуги та сервіси", link: "#", itemCount: 8 },
//   ];

//   const mapNavList = ({ name, link, itemCount }) => {
//     const linkClassName = classNames(
//       styles.link,
//       { [styles.colorGreen]: itemCount > 5000 },
//       { [styles.colorBlue]: itemCount <= 5000 }
//     );

//     return (
//       <li key={name}>
//         <a className={linkClassName} href={link}>
//           {name}
//         </a>
//       </li>
//     );
//   };

//   return <ul className={styles.list}>{categories.map(mapNavList)}</ul>;
// }


function NavLink() {
  const NAV_LINK = {
    icon: "/icons/learn.svg",
    menuItem: "Навчання",
    link: "#",
    hasNotifications: false,
    isActive: false,
  };
  
  function NavLink() {
    const [navLink, setNavLink] = useState(NAV_LINK);
  
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

export default NavLink;
