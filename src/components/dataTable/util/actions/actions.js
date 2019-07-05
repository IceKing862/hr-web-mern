const create = (product, token) => {
    return fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(product)
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

const update = (product, token, productId) => {
    return fetch('http://localhost:3000/products/' + productId, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(product)
    }).then(response => {
        return response.json()
    }).catch(err => {
        return { error: err }
    })
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
    }).catch(err => {
        return { error: err }
    })
}

export { create, read, readOne, update, remove }