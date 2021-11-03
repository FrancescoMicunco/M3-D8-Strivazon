const getData = async() => {
    let data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzU5NDU4MDksImV4cCI6MTYzNzE1NTQwOX0.8-JnqeWjE2RLRn6wo9eXe6lfTacIEpgdPvytb9NRr0I"
        }
    })


    try {
        if (data.ok) {
            console.log(data)
            let products = await data.json()
            return products;
        } else {
            alert("fetched din't appen")
        }
    } catch (err) { console.log("error") }

}

window.onload = async() => {
    const product = await getData()
}