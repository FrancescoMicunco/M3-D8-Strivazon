/* const getData = async() => {
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

} */

window.onload = async() => {


    const form = document.querySelector("form")

    form.onsubmit = async function(e) {

        let name = document.getElementById("name").value
        let description = document.getElementById("description").value
        let brand = document.getElementById("brand").value
        let imageUrl = document.getElementById("image").value
        let price = document.getElementById("price").value


        const product = {
            name,
            description,
            brand,
            imageUrl,
            price
        }
        e.preventDefault()
        const newProduct = await postData(product)
    }
}


// post product

const postData = async(product) => {
    let dataPost = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzU5NDU4MDksImV4cCI6MTYzNzE1NTQwOX0.8-JnqeWjE2RLRn6wo9eXe6lfTacIEpgdPvytb9NRr0I"
        },
        body: JSON.stringify(product),

    })
    let newProduct = await dataPost.json()

}

// form for product