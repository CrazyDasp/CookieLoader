const modal = document.getElementById("subscribe-modal");

function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    acc[name] = value
    return acc
  }, {})
};

window.addEventListener("load", () => {
  const cookie = getCookie();
  
  if (cookie.alertOpen == "true") {
  } else {
    modal.classList.toggle("modal_active");
  };
 });
  
 const closeBtn = document.querySelector(".modal__close");
  
 closeBtn.addEventListener("click", () => {

    modal.classList.toggle("modal_active");
    
    document.cookie = "alertOpen=true";
 });
