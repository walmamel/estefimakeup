import React from "react";
import {Link} from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MyHeaderLinks from 'components/Header/MyHeadersLinks';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

//-- styles
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import styles_bckg from "assets/jss/material-kit-react/views/loginPage.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

//--img
import bride10 from "assets/img/bride10.jpg";
import speciale1 from "assets/img/speciale1.jpg";
import glam7 from "assets/img/glam7.jpg";
import editorial4 from "assets/img/editorial4.jpg";


const dashboardRoutes = [];  
const useStyles = makeStyles(styles);
const useStyle_bckg = makeStyles(styles_bckg);

const cardStyles = {
    cardTitle,
    textCenter: {
      textAlign: "center"
      
    },
    textRight: {
      textAlign: "right"
    },
    servicios: {
      zIndex: "2",
      position: "absolute",
      top:'25%',
      left:'1%',
      right: '1%'
    }
    
  }
  const useCardStyles = makeStyles(cardStyles);
  
export default function AllServices(props) {
  const classes = useStyles();
  const cardClasses = useCardStyles()
  const classes_bckg = useStyle_bckg();

  const { ...rest } = props;
  return (
    
    <div className={cardClasses.servicios}>
    <GridContainer  justify="center">      
        <GridItem xs={12} sm={6} md={4} lg={3}>
        <Card  style={{width: "18rem" , margin:"auto", marginBottom:"5px"}}>
            <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={glam7}
                alt="Card-img-cap"
        />
        <CardBody >
            <h4 className={classes.cardTitle}>Glam</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipis..</p>
            <Link to="/services/dateandtime/glam">
              <Button className={cardClasses.textCenter}  color="warning">
                Reserve
              </Button>
            </Link>
        </CardBody>
        </Card>
        </GridItem>
    
        <GridItem xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.textCenter} style={{width: "18rem", margin:"auto",marginBottom:"5px"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={bride10}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>Brides</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
        <Link to="/services/dateandtime/brides">
          <Button className={cardClasses.textCenter} color="warning">
            Reserve
          </Button>
        </Link>
      </CardBody>
    </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={4} lg={3}>
    <Card style={{width: "18rem", margin:"auto",marginBottom:"5px"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={speciale1}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>Special Effects</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipis..</p>
        <Link to="/services/dateandtime/special_effects">
          <Button className={cardClasses.textCenter} color="warning">
            Reserve
          </Button>
          </Link>
      </CardBody>
    </Card>
    </GridItem>
    <GridItem xs={12} sm={6} md={4} lg={3}>
    <Card style={{width: "18rem", margin:"auto",marginBottom:"5px"}}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={editorial4}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>Photo Shotting Editorial</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipis..</p>
        <Link to="/services/dateandtime/editorial">
        <Button className={cardClasses.textCenter} color="warning">
          Reserve
        </Button>
        </Link>
      </CardBody>
    </Card>
    </GridItem>
    </GridContainer>
    </div>
   
  );
}

