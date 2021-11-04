window.onload = async() => {
        getData()
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

// get product
const getData = async(e) => {
    let data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzU5NDU4MDksImV4cCI6MTYzNzE1NTQwOX0.8-JnqeWjE2RLRn6wo9eXe6lfTacIEpgdPvytb9NRr0I"
        }
    })
    if (data.ok) {
        let products = await data.json()
        let row = document.getElementById("cards")
        products.forEach(element => {
            row.innerHTML += `<ul class="list-group"><li class="list-group-item" style="font-weight:bold">${element.name}</li> 
            
            <li class="list-group-item">${element.description}</li>
            <li class="list-group-item">${element.brand}</li>
            <li class="list-group-item">${element.image}</li>
            <li class="list-group-item">${element.price}</li>
            </ul>`
        })
    } else {
        alert("fetched din't appen")
    }
}