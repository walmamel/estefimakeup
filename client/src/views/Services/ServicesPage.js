import React,{useEffect} from "react";
import api from "./../../Api/api";
import {Switch,Route,Redirect} from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// components - sections
import Header from "components/Header/Header.js";
import MyHeaderLinks from 'components/Header/MyHeadersLinks';
import ReservationForm from './Sections/ReservationForm';
import AllServices from './Sections/AllServices';
import DateAndTime from "./Sections/DateAndTime";

//styles
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import styles_bckg from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/logo.jpg";

const dashboardRoutes = [];  
const useStyles = makeStyles(styles);
const useStyle_bckg = makeStyles(styles_bckg);


export default function Cards(props) {
  const classes = useStyles();
  const classes_bckg = useStyle_bckg();
  const { ...rest } = props;

  let [redirect, setRedirect] = React.useState(null);
  let [error,setError] = React.useState(null);
  let [send, setSend] = React.useState(false);
  let [data, setData] = React.useState({
    makeuptype: '',
    date: '',
    numberpeoplemkup: 0,
    hours: '',
    fname: '',
    email: '',
    phone: '',
    address:""
  })
  let {makeuptype, date, numberpeoplemkup, hours, fname, email, phone, address} =  data;

  const getData = (infoUser,sendData) =>{
    setData({
      ...data,
      ...infoUser
    })
    if(sendData){
      setSend(true)
    }else{
      setSend(false)
    }
  }

  const sendData = () =>{
    
    api.newappointment(data).then(res=> {
        let resFromBack = res.data;
        //mensajes error //
        //console.log(resFromBack)
        if(resFromBack.error){
          let displayErrors = resFromBack.errors.map(error=>{

            return <h5>{error.msg}</h5>
          })
          setError(displayErrors)
        }else{
          console.log('test')
          setRedirect(<Redirect to="/thanksreserve" />)
          //setRedirect(true)        
        }
    })  
    .catch(error=>{
        console.log(error)
    })

  };

  useEffect(() => {
    if(send){
      sendData()
      setSend(false)
    }
  })

  console.log(redirect)

  return (
      <div >
        {redirect}
        {/* {redirect ? <Redirect to="/" /> : null  } */}
        <Header
        absolute
        color="transparent"
        routes={dashboardRoutes}
        brand="EstefiMakeup"
        rightLinks={<MyHeaderLinks />}
        {...rest}  
      />
      
      <div
        className={classes_bckg.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <Switch>
        <Route path="/services/reservationform/:titulo" >
         <ReservationForm getData={getData} 
         fname = {fname}
         email = {email}
         phone = {phone}
         address = {address}
         error = {error}
         />
         </Route>
        <Route path="/services/dateandtime/:titulo" > 
          <DateAndTime getData={getData} 
          hours = {hours}
          date = {date}
          numberpeoplemkup = {numberpeoplemkup}
          /> 
        </Route>

        <Route path="/services/all" component={AllServices} />
        </Switch>
    </div>
    
    </div>
    
  );

}
