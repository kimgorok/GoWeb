import MainPage from "./page/MainPage";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipe from "./page/Recipe";
import Introduce from "./page/Introduce";
import ScrollToTop from "./components/FloatButton";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { createGlobalStyle } from "styled-components";
import MyCategory from "./page/MyCategory";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme === "light" ? "white" : "black"};
  }
`;

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {(context) => <GlobalStyle theme={context.theme} />}
      </ThemeContext.Consumer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/category/:categoryId" element={<MyCategory />} />
          <Route path="/category/:categoryId/:recipeId" element={<Recipe />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
