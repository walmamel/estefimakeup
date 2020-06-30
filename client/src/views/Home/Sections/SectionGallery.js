import React from "react";
// @material-ui/core components
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import GradeIcon from '@material-ui/icons/Grade';
import PartyModeIcon from '@material-ui/icons/PartyMode';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import NavPills from "components/NavPills/NavPills.js";

//img
import glam1 from "assets/img/glam1.jpg";
import glam2 from "assets/img/glam2.jpg";
import glam3 from "assets/img/glam3.jpg";
import glam4 from "assets/img/glam4.jpg";
import glam5 from "assets/img/glam5.jpg";

import editorial1 from "assets/img/editorial1.jpg";
import editorial2 from "assets/img/editorial2.jpg";
import editorial3 from "assets/img/editorial3.jpg";
import editorial4 from "assets/img/editorial4.jpg";
import editorial6 from "assets/img/editorial6.jpg";
import editorial8 from "assets/img/editorial8.jpg";
import editorial9 from "assets/img/editorial9.jpg";
import speciale1 from "assets/img/speciale1.jpg";
import speciale2 from "assets/img/speciale2.jpg";
import speciale3 from "assets/img/speciale3.jpg";
import speciale4 from "assets/img/speciale4.jpg";
import speciale6 from "assets/img/speciale6.jpg";
import speciale7 from "assets/img/speciale7.jpg";

import bride1 from "assets/img/bride1.jpg";
import bride2 from "assets/img/bride2.jpg";
import bride3 from "assets/img/bride3.jpg";
import bride4 from "assets/img/bride4.jpg";
import bride5 from "assets/img/bride5.jpg";
import bride6 from "assets/img/bride6.jpg";
import bride10 from "assets/img/bride10.jpg";
import bride11 from "assets/img/bride11.jpg";


//styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import stylesGallery from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const useStylesGallery = makeStyles(stylesGallery)

export default function SectionGallery() {
  const classes = useStyles();
  const classesGallery = useStylesGallery();
  const imageClasses = classNames(
    classesGallery.imgRaised,
    classesGallery.imgRoundedCircle,
    classesGallery.imgFluid
  );
  const navImageClasses = classNames(classesGallery.imgRounded, classesGallery.imgGallery);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Gallery</h2>
          <h5 className={classes.description}>
            Enjoy some of our Makeup, always adapting to yours needs
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}  className={classesGallery.navWrapper}>
                <NavPills
                  alignCenter
                  color="warning"
                  tabs={[
                    {
                      tabButton: "Glam",
                      tabIcon: GradeIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={glam2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={glam4}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={glam3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={glam5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Brides",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={bride5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bride4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bride3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={bride2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bride1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bride6}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bride11}
                              className={navImageClasses}
                            />
                            
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Special Effects",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={speciale1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={speciale2}
                              className={navImageClasses}
                            />
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={speciale4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={speciale3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={speciale6}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={speciale7}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <video className={navImageClasses} autoPlay='autoplay' muted="muted" loop="loop" playsInline="playsinline">
                            <source src={require('../../../assets/videos/speciale1.webm')} type="video/webm"/>   
                            <source src={require('../../../assets/videos/speciale1.mp4')} type="video/mp4"/>

                            </video>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Editorial",
                      tabIcon: PartyModeIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={editorial9}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={editorial3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={editorial4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={editorial8}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={editorial6}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={editorial1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
          
          
        </GridContainer>
          
      </div>
    </div>
  );
}
