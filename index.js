"use strict";

// const el = document.querySelector("div");
// el.textContent = "content";
// el.style.color = "red";
// const el = createNewElement(type, attrs, content)

// const reactEl = createElement(type, attrs, content)

{
  /* JSX
<type arrts>
  content
</type> */
}

// JSX => JS for browser

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
// root.render(<App></App>);

function App() {
  // return <div>Hello React</div>;
  return (
    <>
      <Header />
      <div>Hello React</div>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="pageHeader">
      <img
        className="logoImg"
        src="https://cdn-icons-png.flaticon.com/512/5332/5332306.png"
        alt="logo"
      ></img>
      <h1 className="pageTitle">Page Title</h1>
    </header>
  );
}

// Додати та стилізувати Footer (Contacts, About, FAQ)
// (опустити вниз сторінки)

function Footer() {
  return (
    <footer className="pageFooter">
      <a href="#">Contact</a>
      <a href="#">About</a>
    </footer>
  );
}
