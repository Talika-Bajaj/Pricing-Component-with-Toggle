const toggleControl = document.querySelector(".toggle-control");
const toggleCircle = document.querySelector(".toggle-circle");
const priceAnnually = document.querySelectorAll(".price-annually");
const priceMonthly = document.querySelectorAll(".price-monthly");

function showImage(params) {
    if (window.innerWidth > 1100) {
        document.body.style.backgroundImage = "url('images/bg-top.svg'), url('images/bg-bottom.svg')";
        document.querySelector("section:nth-of-type(even)").style.height = "500px";
        document.querySelector("section:nth-of-type(even)").style.padding = "45px 35px";
    }
    else {
        document.body.style.backgroundImage = "url('images/bg-top.svg')";
    }
}

showImage();
window.addEventListener("resize", showImage);

function toggle(params) {
    if (toggleCircle.classList.contains("right")) {
        toggleCircle.classList.add("left");
        toggleCircle.classList.add("transition");
        toggleCircle.classList.remove("right");
        priceAnnually.forEach(price => {
            price.style.display = "block";
        })
        priceMonthly.forEach(price => {
            price.style.display = "none";
        })
    }
    else {
        toggleCircle.classList.add("right");
        toggleCircle.classList.remove("left");
        toggleCircle.classList.add("transition");
        priceAnnually.forEach(price => {
            price.style.display = "none";
        })

        priceMonthly.forEach(price => {
            price.style.display = "block";
        })
    }
}

toggleControl.addEventListener("click", toggle);