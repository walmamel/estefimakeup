const genEmail = (data) => {
    let html = `
            <div>
                <h1>Dear ${data.fullname}!</h1>
                <h1> EstefiMakeup Thanks you for choosing our services </h1>
                    <p>Your reservation has been received</p>
                <h3> The data of your reservation are: </h3>
                    <ul>
                        <li>Date: ${data.date}</li>
                        <li>Number of People for Makeup: ${data.numberofpeople}</li>
                        <li>Time it needs to be ready : ${data.hours}</li>
                        <li>Fullname: ${data.fullname}</li>
                        <li>Phone: ${data.phone}</li>
                        <li>Exact Location Whould you like to get the Makeup ready : ${data.address}</li>
                    </ul>
                <h3> We will confirm your reservation as soon as possible. Thanks for your trust </h3>
                <h3> Sincerelly,</h3>
                <h3> Your EstefyMakeup Team </h3>
            </div>
         `

    return(html)
}

module.exports = genEmail