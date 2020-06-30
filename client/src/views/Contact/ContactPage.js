import React from "react";
import api from "./../../Api/api";
import {Redirect} from "react-router-dom";
import "./style.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Message from "@material-ui/icons/Message";
import People from "@material-ui/icons/People";
import Phone from "@material-ui/icons/Phone";
//components
import Header from "components/Header/Header.js";
import MyHeaderLinks from "components/Header/MyHeadersLinks";
import MyFooter from "components/Footer/MyFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/editorial2.jpg";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("cardNotHidden");
  }, 500);
  const classes = useStyles();
  const { ...rest } = props;

  let [redirect, setRedirect] = React.useState(null);
  let [error,setError] = React.useState(null);
  let [data, setData] = React.useState({
    fname: '',
    email: '',
    phone: '',
    message: ''
  })
  let {fname, email, phone, message} =  data;
  
  const onChange = (e) => { 
    setData({
      ...data,[e.target.name]:e.target.value
    })
  }

  const sendData = () =>{
     console.log('sendData')
    api.contact(data).then(res=> {
        let resFromBack = res.data;
        //mensajes error //
        //console.log(resFromBack)
        if(resFromBack.error){
          let displayErrors = resFromBack.errors.map(error=>{

            return <h5 key={error.param}>{error.msg}</h5>
          })
          setError(displayErrors)
        }else{
          console.log('test')
          setRedirect(<Redirect to="/thanksmsg" />)
          //setRedirect(true)        
        }
    })  
    .catch(error=>{
        console.log(error)
    })

  };

  
  return (
    <div>
      {redirect}
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
                
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Contact Me</h4>
                  </CardHeader>
                  
                  <CardBody>
                    <div className="error-contact"> {error} </div>
                    <CustomInput
                      onChange= {onChange}
                      labelText="Full Name"
                      id="fname"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name:"fname",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange ={onChange}
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        name: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                    onChange={onChange}
                      labelText="Phone"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name:"phone",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <br/>
                    <CustomInput
                      onChange ={onChange}
                      labelText="Leave us your message here..."
                      id="message"
                      formControlProps={{
                      fullWidth: true,
                      className: classes.textArea
                    }}
                    inputProps={{
                    multiline: true,
                    rows: 5,
                    name: "message",
                    endAdornment: (
                          <InputAdornment position="end">
                            <Message className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={sendData} simple color="warning" size="lg">
                      Send Message
                    </Button>
                  </CardFooter>
                
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <MyFooter whiteFont />
      </div>
    </div>
  );
}