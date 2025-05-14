const fetchData = (shoulFail = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shoulFail) {
                reject('error occured')
            } else {
                resolve('choclate')
            }
        }, 1000)
    })
}

module.exports = fetchData