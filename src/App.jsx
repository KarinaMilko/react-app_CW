import Counter from "./components/Counter";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  // return <Header />;
  const isLogin = false;
  const user = {
    specOffers: "You have -20% for all laptops",
  };
  // Створити компонент Main, де виводити або знижку або "Register for up to -50%"
  // *Якщо користувач не залогінений, то знижку підсвітити червоним
  return (
    <>
      <Header isLogin={isLogin} />
      <Main isLogin={isLogin} user={user} />
      <Counter />
    </>
  );
}

export default App;
