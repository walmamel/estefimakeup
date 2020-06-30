import React,{useEffect} from "react";
import Calendar from 'react-calendar';
import {Link,withRouter} from 'react-router-dom';
import api from '../../../Api/api';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import InputAdornment from "@material-ui/core/InputAdornment";

import 'assets/jss/material-kit-react/views/servicesSection/dateandtime.css'
import styles from "assets/jss/material-kit-react/views/loginPage.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Hour from "./horas/hour/Main";
import App from './horas/hour/App'



const useStyles = makeStyles(styles);




function DateAndTime(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [classInput, setClassInput] = React.useState("notActive");
  const [classHour, setClassHour] = React.useState("notActive");
  const [classNext, setClassNext] = React.useState("notShow")
  const [day, setDay] = React.useState(false)
  const [error,setError] = React.useState(null)
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

  let currentDate = new Date();

  const [reservationData, setReservationData] = React.useState({
    date: props.date,
    numberpeoplemkup: props.numberpeoplemkup,
    hours: '',
    busyHours: [],
    makeuptype: titulo
  })

  let {date,numberpeoplemkup,hours,busyHours} = reservationData;

  const selectHour = (hours,min) =>{
    
    let Hour = currentDate.getHours();
    let selectedDate = new Date(day).setHours(hours,min)

    console.log(selectedDate)

    if(currentDate.setHours(Hour+2+(1*numberpeoplemkup)) > selectedDate){
      setError("Please select a valid hour")
      setReservationData({
        ...reservationData, hours:``      
      })
    }else{
      setError(null)
      setClassNext("show")
      setReservationData({
        ...reservationData, hours:`${hours-(1*numberpeoplemkup)}:${min}-${hours}:${min}`      
      })
    }
    
    
  }

  const onChange = (e) => {
    
      if(e.target.value < 0){
        setReservationData({
          ...reservationData, [e.target.name]:0
        })
      }else{
      setReservationData({
      ...reservationData, [e.target.name]:e.target.value
    })
      setClassHour('active')
    }

    
    console.log(e.target.value);

  }

  
  const activeInput = (date) => {
    if(numberpeoplemkup !== 0 && classHour !== 'active'){
      setClassHour('active')
    }
    
    //Thu Apr 02 2020 00:00:00 GMT+0200 (Central European Summer Time)
    let currday = currentDate.setHours(0,0,0,0)
    if(currday > date){
      setError('Choose a valid date')
      console.log(error)
    }else{
      setError(null)
      setClassInput('active')

      setDay(date)
    }

    let shortDate = String(date).slice(0,15);
    console.log(shortDate)
    api.busyhours(shortDate).then(res=>{
      let busyHours = res.data;
      setReservationData({...reservationData, date:shortDate, busyHours:busyHours})
    }).catch(error=>{
      console.log(error)
      alert("Connection error, please choose the day again")
    })
  }
  console.log(busyHours)
  return (
    
     <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Reserve for {titulo}</h4>
                  </CardHeader>
                  <div>
                  <br/>
                    {error ? 
                      <div className="error-cont">
                        <h5> {error} </h5>
                      </div>
                      : null
                    }
                    <Calendar
                    className="calendar"
                    onClickDay={activeInput}
                    />
                    <CardBody>
                    <div className={classInput}>  
                    <CustomInput
                      onChange={onChange}
                      inputValue = {numberpeoplemkup}
                      labelText="Number of people to Make up"
                      id="makeupnumber"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name:"numberpeoplemkup",
                        type: "number",
                        endAdornment: (
                          <InputAdornment position="end">
                            <GroupAddIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    </div>
                    <div className={classHour}>
                    <label>Please select the Hour that you need to be ready. The Minimun time required is 1 hour per person.</label>
                      <Hour
                      occupied_hour={busyHours}
                      selected_hour={hours}
                      last_hour={22}
                      init_hour={6}
                      click = {selectHour}
                      />
                    </div>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>

                    <Link className={classNext} to={"/services/reservationform/"+rawtitulo}>
                    <Button onClick={()=>props.getData(reservationData,false)} simple size="lg" color="warning">
                      Reserve
                    </Button>
                    </Link>
                    <Link to={"/services/all"}>
                    <Button simple size="lg" color="warning">
                      Go Back
                    </Button>
                    </Link>
                    </CardFooter>
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
  );
}


export default withRouter(DateAndTime);