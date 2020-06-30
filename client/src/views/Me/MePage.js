import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import MyFooter from "components/Footer/MyFooter.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MyHeaderLinks from 'components/Header/MyHeadersLinks';
import Parallax from "components/Parallax/Parallax.js";
// img
import estefi from "assets/img/estefi2.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="EstefiMakeup"
        rightLinks={<MyHeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "warning"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/logomed.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                    <img src={estefi} alt="..." className={imageClasses} />
                  <div className={classes.name}>
                    <h1 className={classes.title}>Estefi Cuevas</h1>
                    <h3>Makeup Artist</h3>
                    
                    <Button justIcon link className={classes.margin5}
                    color="transparent" href="https://www.instagram.com/estefimakeup">
                    <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}
                    color="transparent" href="https://www.facebook.com//EstefiMUA25/">
                    <i className={ "fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h5>
                I am a freelancer Makeup Artist based in Las Vegas, NV. 
              </h5>
            </div>
            </div>
            <br/>

        </div>
      </div>
      <MyFooter whiteFont />
    </div>
  );
}
