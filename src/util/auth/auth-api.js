const signin = user => {
    return fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}

export { signin }