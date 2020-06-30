const genEmail = (data) => {
    let html = `
            <div>
                <h1>Dear ${data.fullname}!</h1>
                <h2>Your reservation has been confirm</h2>
                <h3> The data of your reservation are: </h3>
                    <ul>
                        <li>Date: ${data.date}</li>
                        <li>Number of People for Makeup: ${data.numberpeoplemakeup}</li>
                        <li>Time it needs to be ready : ${data.hours}</li>
                        <li>Fullname: ${data.fullname}</li>
                        <li>Phone: ${data.phone}</li>
                        <li>Exact Location Whould you like to get the Makeup ready : ${data.address}</li>
                    </ul>
                <h3> Thanks for your trust </h3>
                <h3> Sincerelly,</h3>
                <h3> Your EstefyMakeup Team </h3>
            </div>
         `

    return(html)
}

module.exports = genEmail