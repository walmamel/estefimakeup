import React from "react";
import {Link} from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SectionMyServices() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>Estefi Makeup</h1>
          <h5 className={classes.description}>
          Personalized Excellence Makeup tailored to your needs. We are located in Las Vegas.
           
          
          </h5>
          <Link to="/services/all">
              <Button
                color="warning"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore our Services 
                </Button>
            </Link>
        </GridItem>
      </GridContainer>
     
    </div>
  );
}
