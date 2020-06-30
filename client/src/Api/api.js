import axios from 'axios'

const api = axios.create()


const busyhours = (day) => api.get(`/api/appointment/busyhours/${day}`);
//const busyhours = (day) => api.get(`/busyhours`,{params:{day:day}})
const newappointment = (data) => api.post('/api/appointment/newappointment',data); 
const contact = (data) => api.post('/contact/newcontact',data);


const apis = {
    busyhours,
    newappointment,
    contact
}

export default apis