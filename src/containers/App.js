import React from "react";
import Basic from "../components/Left/Basic";
import Right from "../components/Right/Right";
import "./styles.css";
import ResumeContextProvider from "../contexts/ResumeContext";
import { BrowserRouter, Route, Link } from "react-router-dom";
import myClasses from "./../components/Left/Left.module.css";
import logo from "../../src/assets/default.png";
import thumbn from "../../src/assets/templateA.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import NavBar from '../components/NavBar/navBar';
import homepage from '../components/homepage/homepage';
import Faq from '../components/homepage/Faq';

function App() {
  return (
    <div>
    <NavBar/>
    <div className="app">
      <ResumeContextProvider>
        <BrowserRouter>
        <Route path="/" component={homepage} exact/>
        <Route path="/faq" component={Faq} exact/>
        <Route path="/resume" component={Templates} exact />
        <Route path="/resume/basic" component={Basic} />
        <Route path="/resume" component={Right} />
        </BrowserRouter>
      </ResumeContextProvider>
    </div>
    </div>
  );
}

export default App;


function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "#FF8E53",
      minWidth: 100,
      marginLeft: 30,

    },
  });

  const classes = useStyles();

  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <Link to="/" style={{ textAlign: "left" }}>
          <img src={logo} alt="logo" className={myClasses.img2} />
        </Link>
      </div>
      <hr className={myClasses.hr2} />
      <h3 className={myClasses.templatesH2}>Template:</h3>
      <div className={myClasses.cards}>
        <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/resume/basic/header"
          >
            The Basic
          </Button>
        </div>
        {/* Placeholder for a second template */}
        {/* <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/basic/header"
          >
            The Stylish
          </Button>
        </div> */}
      </div>
    </div>
  );
}
