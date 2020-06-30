import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import MyFooter from "components/Footer/MyFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MyHeaderLinks from 'components/Header/MyHeadersLinks';
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import SectionGallery from "./Sections/SectionGallery";
import SectionMyServices from "./Sections/SectionsMyServices";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="EstefiMakeup"
        rightLinks={<MyHeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "warning"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/logo.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}></h1>
              
            </GridItem>
          </GridContainer>
        </div>   
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
         <SectionGallery/>
         <SectionMyServices/>
        </div>
      </div> 
      <MyFooter whiteFont/>
    </div>
  );
}
