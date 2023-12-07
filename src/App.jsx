import Sidebar from "./components/Sidebar";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfoliosPage from "./pages/PortfoliosPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { IconButton, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import PortfolioDetails from "./components/PortfolioDetails";
import BlogDetails from "./components/BlogDetails";


function App() {
    const [theme, setTheme] = useState("dark-theme");
    const [checked, setChecked] = useState(false);
    const [navToggle, setNavToggle] = useState(false);

    useEffect(() => {
      document.documentElement.className = theme;
    }, [theme]);

    const themeToggler = () => {
      if (theme === "light-theme") {
        setTheme("dark-theme");
        setChecked(false);
      } else {
        setTheme("light-theme");
        setChecked(true);
      }
    };
  return (
    <>
      <Sidebar navToggle={navToggle} theme={theme} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <main>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage theme={theme} />} />
          <Route path="/resume" exact element={<ResumePage />} />
          <Route path="/portfolios">
            <Route index element={<PortfoliosPage />} />
            <Route path=":portId" element={<PortfolioDetails />} />
          </Route>

          <Route path="/blogs">
            <Route index element={<BlogPage />} />
            <Route path=":blogId" element={<BlogDetails />} />
          </Route>
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
