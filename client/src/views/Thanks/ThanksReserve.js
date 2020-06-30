import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//components
import Header from "components/Header/Header.js";
import MyHeaderLinks from "components/Header/MyHeadersLinks";
import MyFooter from "components/Footer/MyFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/editorial2.jpg";

const useStyles = makeStyles(styles);

export default function ThanksReserve(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("cardNotHidden");
  }, 500);
  const classes = useStyles();
  const { ...rest } = props;


  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="EstefiMakeup"
        rightLinks={<MyHeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="warning" className={classes.cardHeader}>

                    <h3>Thanks ! </h3>
                  </CardHeader>
                  
                  <CardBody>
                    
                    <h5>Thank you for trusting us and for using our services, in a few moments you will receive our confirmation.</h5>
                    
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <MyFooter whiteFont />
      </div>
    </div>
  );
}