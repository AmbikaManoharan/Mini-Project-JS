let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')

let basket = JSON.parse(localStorage.getItem("data")) || []

let calculation = () => {
    let cartIcon = document.getElementById('cartItems')
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}

calculation()


let cartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            console.log(x)
            let { id, item } = x
            let search = products.find((y) => y.id === id) || []
            return `

           <tr class="cart-items mt-5" key={index}>           
                <td><img src="${search.img}" class='img-cart' style="width:100px; height:100px;"></img></td>           
                <td>${search.title}</td>
                <td>Rs.${search.price}</td>
                <td>Quantity:</td>                             
                <td>
                    <div class="buttons">
                        <button class="btn btn-primary mt-4" onclick="decrement(${id})">-</button>                          
                        <button class="btn btn-primary shop-item-button mt-4" id="${id}">${item}</button>           
                        <button class="btn btn-primary mt-4" onclick="increment(${id})">+</button>                        
                        <button class='btn btn-danger ms-5 mt-4' onclick="removeItem(${id})">Remove Item</button> 
                    </div> 
                    <td>Rs.${item * search.price}</td>     
                </td>
          </tr>                  
        
           `
        })
            .join(""))
    }
    else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</<h2>
        <a href="index.html">
        <button class="btn btn-primary">Back to Home</button>
        </a>`
    }

}

cartItems()

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
    cartItems()
    TotalAmount()
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
    basket = basket.filter((x) => x.item !== 0)
    cartItems()
    TotalAmount()

    localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    console.log(search)
    document.getElementById(id).innerHTML = search.item
    calculation1()

}

let calculation1 = () => {
    let cartIcon = document.getElementById('cartItems')
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}

calculation1()

let removeItem =(id)=>{
    let selectedItem=id    
    basket=basket.filter((x)=>x.id !== selectedItem)  
    calculation1()     
    cartItems()
    TotalAmount()
    localStorage.setItem("data", JSON.stringify(basket))
    console.log(basket) 
}

let clearCart=()=>{
    basket=[]
    cartItems()
    calculation1()
    localStorage.setItem("data", JSON.stringify(basket))
}

let TotalAmount=()=>{
    if(basket.length !==0 ){
        let amount=basket.map((x)=>{
            let{item,id}=x
            let search=products.find((y)=>y.id===id)||[]
                return item* search.price            
        }).reduce((x,y)=>x+y,0)
        
        label.innerHTML=`
        <div class='d-flex justify-content-between py-1'>
            <div>
                <button class='btn btn-danger' onclick="clearCart()">Clear Cart</button>
                <button class='btn btn-primary ms-2'>Pay Now</button>
            </div>
        <h3>Total Bill:Rs. ${amount}</h3>
        </div>`        
    }
    else return
}

TotalAmount()