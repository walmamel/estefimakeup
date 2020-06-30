const genEmail = (data) => {
    let html = `
            <div>
                <h1> Dear ${data.fullname}!</h1>
                <h2> We lament to inform you that your reservation could not be accepted. We invite you to try send a message in the contact
                page and inform us if you needed something urgent.</h2>
                <h3> Thanks for your trust </h3>
                <h3> Sincerelly,</h3>
                <h3> Your EstefyMakeup Team </h3>
            </div>
         `

    return(html)
}

module.exports = genEmail