let orders1 = window.localStorage.getItem("orders")
if(orders1 != null){
    document.querySelector("#order-count").textContent = orders1
    
}