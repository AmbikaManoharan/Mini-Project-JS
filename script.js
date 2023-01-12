let url = "https://mocki.io/v1/aa4217a4-5423-49e1-bbc0-c1c1526df1ee"


async function getData() {
    try {
        var res = await fetch(url)
        var data = await res.json()
        console.log(data)
        console.log(res)
        console.log(data.products[0].id)
    }

    catch (error) {
        console.log("Some Error ocuured", +error)
    }
}
getData()



// let products = [
//     {
//         "id": 1,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/va1njylgeggowwszedva",
//         "title": "Burger",
//         "desc": "American",
//         "price": "80"
//     },
//     {
//         "id": 2,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/uapsjys7kiq720rdxvhb",
//         "title": "Masala Dosa",
//         "desc": "South Indian",
//         "price": "315"
//     },
//     {
//         "id": 3,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/anag41tl5itbdly9zbxi",
//         "title": "Milk Shake",
//         "desc": "Beverages",
//         "price": "150"
//     },
//     {
//         "id": 4,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/rcglp3bvvbkpmpxwfwba",
//         "title": "Pani Puri",
//         "desc": "Sweets & Snacks",
//         "price": "40"
//     },
//     {
//         "id": 5,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/lmjtg0ddbp5azmltdqeo",
//         "title": "Veg Momos",
//         "desc": "Chinese",
//         "price": "100"
//     },
//     {
//         "id": 6,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/sf7b0sgjg8ge7u27eybg",
//         "title": "Donuts",
//         "desc": "American",
//         "price": "200"
//     },
//     {
//         "id": 7,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/bvmyj1emxkgpfh1u3o5l",
//         "title": "Pizza",
//         "desc": "Italian",
//         "price": "450"
//     },
//     {
//         "id": 8,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/iv7b5ryxnzhgwnahoe4z",
//         "title": "Noodles",
//         "desc": "Chinese",
//         "price": "250"
//     },
//     {
//         "id": 9,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/kzy0sixmxahdxeb9vysz",
//         "title": "Poori & Chole",
//         "desc": "North Indian",
//         "price": "150"
//     },
//     {
//         "id": 10,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/wkyguoz5gn2tgo3s2zpc",
//         "title": "Biryani",
//         "desc": "North Indian",
//         "price": "450"
//     },
//     {
//         "id": 11,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/an5kwjzp6haxoh8hof0y",
//         "title": "Soups",
//         "desc": "Chinese",
//         "price": "150"
//     },
//     {
//         "id": 12,
//         "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_262,h_262,c_fill/vup7ikcmgiycvzdvlro9",
//         "title": "Veg Roll",
//         "desc": "Chinese",
//         "price": "200"
//     }

// ]

let basket = JSON.parse(localStorage.getItem("data")) || []
let shop = document.querySelector('#data-output')
let generateShop = () => {
    return (shop.innerHTML = products
        .map((x) => {
            let { id, img, title, desc, price } = x
            let search = basket.find((x) => x.id === id) || []
            return `               

                <div id="product-id-${id}" class="card mt-4" style="width: 18rem;">
                    <img src="${img}" class="card-img-top shop-item-image" alt="${img}">
                        <div class="card-body">
                            <div class="d-flex  justify-content-between">
                                <h5 class="card-title shop-item-title">${title}</h5>
                                <h5 class="card-price shop-item-price">Rs.${price}</h5>
                            </div>
                            <p class="card-desc shop-item-desc">${desc}</p> 
                            <div class="buttons">
                                <button class="btn btn-primary mt-4" onclick="decrement(${id})">-</button>                          
                                <button class="btn btn-primary shop-item-button mt-4" id="${id}">
                                ${search.item === undefined ? 0 : search.item}
                                </button>
                                <button class="btn btn-primary mt-4" onclick="increment(${id})">+</button>
                            </div>
                        </div>
                </div>
            `
        })
        .join(""))
}

generateShop()




let increment = (id) => {

    let selectedItem = id

    let search = basket.find((x) => x.id === selectedItem)

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    }

    else {
        search.item += 1
    }
    localStorage.setItem("data", JSON.stringify(basket))
    console.log(basket)
    update(selectedItem)
}


let decrement = (id) => {
   
    let selectedItem = id

    let search = basket.find((x) => x.id === selectedItem)


    if (search.item === 0) return;

    else {
        search.item -= 1
    }
    update(selectedItem)
    basket=basket.filter((x)=>x.item !== 0)
    console.log(basket)
    
    localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    console.log(search)
    document.getElementById(id).innerHTML = search.item
    calculation()

}

let calculation = () => {
    let cartIcon = document.getElementById('cartItems')
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)    
}

calculation()

