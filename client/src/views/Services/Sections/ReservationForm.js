import React from "react";
import {withRouter,Link} from 'react-router-dom';
import './style.css'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import PlaceIcon from '@material-ui/icons/Place';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//-- styles
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

function ReservationForm(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("cardNotHidden");
  }, 500);
  const classes = useStyles();
  let rawtitulo = props.match.params.titulo
  let titulo_array = rawtitulo.split('_')

  let titulo = ''
  titulo_array.forEach(item=>{
    titulo += `${item.charAt(0).toUpperCase()+item.slice(1) } `
  })
  
  let [data, setData] = React.useState({
    fname: props.fname,
    email: props.email,
    phone: props.phone,
    address: props.address
  })
  let {fname, email, phone, address} =  data;
 
  const onChange = (e) => { 
   
    setData({
      ...data,[e.target.name]:e.target.value
    })
    console.log(data);
  }
  return (
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Reserve for {titulo}</h4>
                  </CardHeader>
                  <CardBody>
                    <div className="error-cont"> 
                      {props.error} 
                    </div>
                    
                    <CustomInput
                    onChange={onChange}
                    inputValue = {fname}
                      labelText="Full Name"
                      id="fname"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name: "fname",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                    onChange={onChange}
                    inputValue={email}
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
                    inputValue={phone}
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
                    <CustomInput
                    onChange={onChange}
                    inputValue={address}
                      labelText="Address (specific place would you like to get the Make up)"
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name: "address",
                        endAdornment: (
                          <InputAdornment position="end">
                            <PlaceIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Link to={"/services/dateandtime/"+rawtitulo}>
                    <Button onClick={()=>props.getData(data,false)} simple size="lg" color="warning">
                      Go Back
                    </Button>
                    </Link>
                    <Button onClick={()=>props.getData(data,true)} simple color="warning" size="lg">
                      Confirm Reserve
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
  );
}

export default withRouter(ReservationForm);