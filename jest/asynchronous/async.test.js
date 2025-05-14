//async unit test

const fetchData = require('./async')

//just check the fetch data from the dummy promise call
test('the data is choclate using promises', async () => {
    return fetchData().then(data => {
        expect(data).toBe('choclate')
    })
})


//the test is checking for an error
test('the data is choclate using promises', async () => {
    expect.assertions(1)
    try {
        await fetchData(true)
    } catch (error) {
        expect(error).toBe('error occured')
    }

})

//resolves for a promise resolved function and vice versa for reject
test('fetch fails' , async () => {
 await expect(fetchData()).resolves.toBe('choclate')
 await expect(fetchData(true)).rejects.toMatch('error occured')
})