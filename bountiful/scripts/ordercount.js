let orders = window.localStorage.getItem("orders")
document.querySelector("#form").addEventListener("submit", ()=> {
    if(orders != null) {
        window.localStorage.setItem("orders", parseInt(orders)+1)
      } else {
        window.localStorage.setItem("orders", 1)
      }
      
})
