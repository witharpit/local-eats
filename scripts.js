
function showDiscountAlert() {
    alert("Congrats! Use code LOCAL10 to get 10% off your next meal.");
}


function showOfferPopup() {
  window.open("popup.html", "Offer Details", "width=500,height=400");
}

function showNewsletter() {
  window.open("newsletter.html", "Subscribe", "width=500,height=400");
}



window.onload = function () {
    const form = document.getElementById("booking-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert(" Your booking has been confirmed!");
            this.reset();
        });
    }
};


function filterMenu() {
    const input = document.getElementById("menu-search");
    const filter = input.value.toUpperCase();
    const items = document.getElementsByClassName("menu-item");

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText;
        if (text.toUpperCase().includes(filter)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
