const genEmail = (data) => {
    let html = `
            <div>
                <h1> Reservation Request  </h1>
                    
                <h3> The data for the reservation are: </h3>
                    <ul>
                        <li>Makeup Type: ${data.makeuptype}</li>
                        <li>Date: ${data.date}</li>
                        <li>Number of People for Makeup: ${data.numberofpeople}</li>
                        <li>Time it needs to be ready : ${data.hours}</li>
                        <li>Fullname: ${data.fullname}</li>
                        <li>Phone: ${data.phone}</li>
                        <li>Exact Location whould you like to get the Makeup ready : ${data.address}</li>
                    </ul>
                <h3> Confirm or Reject the reservation </h3>
                <div>
                    <a href="https://estefimkup.herokuapp.com/api/appointment/confirm/${data.appointmentID}"> Confirm </a>
                <div/>    
                <div>   
                    <a href="https://estefimkup.herokuapp.com/api/appointment/reject/${data.appointmentID}"> Reject </a>
                </div>
            </div>
                    `

    return(html)
}

module.exports = genEmail