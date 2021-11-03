let pName = document.getElementById("product")
let description = document.getElementById("description")
let brand = document.getElementById("brand")
let image = document.getElementById("image")
let price = document.getElementById("price")
let product = new Object()


function postNewData() {
    console.log(pName.value)
}

/* function postNewData() {
    product.name = pName.value;
    product.description = description.value;
    product.brand = brand.value;
    product.image = image.value;
    product.price = price.value;
    console.log(product)
}
 */


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
    const product = await postData()
    console.log(product)

}


// post product

const postData = async() => {
    let dataPost = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzU5NDU4MDksImV4cCI6MTYzNzE1NTQwOX0.8-JnqeWjE2RLRn6wo9eXe6lfTacIEpgdPvytb9NRr0I"
        },
        body: JSON.stringify({
            name: `Alphabet`,
            description: "the best phone of your life",
            brand: "Alphabet",
            imageUrl: "onsubmit="
            postNewData() https: //www.unieuro.it/online/iPhone/iPhone-12-128GB---Verde-pidAPLIPHONE12128GR?gclsrc=aw.ds&gclid=Cj0KCQjw5oiMBhDtARIsAJi0qk2cWZdeXlOos1a3eeeOU4XQrvtyLyFk9X6bDcFDaOPuJHV3CjCF2Z0aAqPfEALw_wcB&gclsrc=aw.ds"
                postNewData()
            ",
            price: 100
        }),

    })
    let products = await dataPost.json()

}

// form for product