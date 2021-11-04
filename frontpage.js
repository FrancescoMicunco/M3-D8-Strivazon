const getData = async(e) => {
    let row = document.getElementById("cards")
    let data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzU5NDU4MDksImV4cCI6MTYzNzE1NTQwOX0.8-JnqeWjE2RLRn6wo9eXe6lfTacIEpgdPvytb9NRr0I"
        }
    })
    if (data.ok) {
        let products = await data.json()

        products.forEach(element => {

            row.innerHTML += `<ul class="list-group">
            <li class="list-group-item" style="font-weight:bold">${element.name}</li> 
            <li class="list-group-item">${element.description}</li>
            <li class="list-group-item">${element.brand}</li>
            <li class="list-group-item">${element.image}</li>
            <li class="list-group-item">${element.price}</li>
            <li class = "list-group-item"><a href="/detail.html?${element._id}">details</a></li>

            </ul>`
        })
    } else {
        alert("fetched din't appen")
    }
}