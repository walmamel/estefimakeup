import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";
//--components
import MyContactPage from "views/Contact/ContactPage.js";
import ServicesPage from "views/Services/ServicesPage";
import Home from './views/Home/Home';
import ReservationForm from "./views/Services/Sections/ReservationForm"
import MePage from "./views/Me/MePage";
import ThanksReserve from "./views/Thanks/ThanksReserve";
import ThanksMsg from "./views/Thanks/ThanksMsg";

var hist = createBrowserHistory();

function app() {
    return (
        <div className='body'> 

        <Router history={hist}>
            <Switch>
       
                <Route path="/" exact component={Home}/>
                <Route path="/contact" component={MyContactPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/reservation_form" component={ReservationForm} />
                <Route path="/me" component={MePage} />
                <Route path="/thanksreserve" component={ThanksReserve} />
                <Route path="/thanksmsg" component={ThanksMsg}/>
    
            </Switch>
        </Router>,
            
        </div>
    )
}

export default app;



 






