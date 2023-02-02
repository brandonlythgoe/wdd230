

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".header-today p").textContent = fulldate;

//footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();


document.querySelector("#lastmodified").textContent = document.lastModified;