const create = (user, token) => {
    return fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

const read = () => {
    return fetch('http://localhost:3000/products', {
        method: 'GET'
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

const readOne = (productId) => {
    return fetch('http://localhost:3000/products/' + productId, {
        method: 'GET'
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

const update = (user, token, productId) => {
    return fetch('http://localhost:3000/products/' + productId, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

const remove = (token, productId) => {
    return fetch('http://localhost:3000/products/' + productId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

export { create, read, readOne, update, remove }