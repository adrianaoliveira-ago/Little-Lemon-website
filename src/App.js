// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div data-testid="app-main">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
