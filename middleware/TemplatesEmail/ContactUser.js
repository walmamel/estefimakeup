const genEmail = (data) => {
    let html = `
            <div>
                <h1>Dear ${data.fname}!</h1>
                <h1> EstefiMakeup Thanks you for your interest in our services </h1>
                    <p>Your message has been received</p>
                
                <h3> We will reply as soon as possible. Thanks!</h3>
                <h3> Sincerelly,</h3>
                <h3> Your EstefyMakeup Team </h3>
            </div>
         `

    return(html)
}

module.exports = genEmail