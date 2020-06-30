const genEmail = (data) => {
    let html = `
            <div>
                <h1> Info Request  </h1>
                    
                <h3> The data for ContactMe are: </h3>
                    <ul>
                        <li> Fullname: ${data.fname}</li>
                        <li> Email: ${data.email}</li>
                        <li> Phone: ${data.phone}</li>
                    </ul>
                    <p> Message : ${data.message}</p>
                
            </div>
                    `

    return(html)
}

module.exports = genEmail