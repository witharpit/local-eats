
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

    // ---------- Hamburger Menu ----------
    const hamburger = document.querySelector(".hamburger");
    const navLinks  = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("open");
            navLinks.classList.toggle("open");
        });
    }

    // ---------- Touch-friendly Dropdowns ----------
    const dropdowns = document.querySelectorAll(".dropdown > a");
    dropdowns.forEach(function (link) {
        link.addEventListener("click", function (e) {
            // Only intercept on mobile (hamburger visible)
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent  = this.parentElement;
                const content = parent.querySelector(".dropdown-content");
                if (!content) return;

                // Close all other open dropdowns
                document.querySelectorAll(".dropdown-content.open").forEach(function (el) {
                    if (el !== content) el.classList.remove("open");
                });

                content.classList.toggle("open");
            }
        });
    });

    // Close nav if user clicks outside on mobile
    document.addEventListener("click", function (e) {
        if (window.innerWidth <= 768 && navLinks && hamburger) {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove("open");
                hamburger.classList.remove("open");
                document.querySelectorAll(".dropdown-content.open").forEach(function (el) {
                    el.classList.remove("open");
                });
            }
        }
    });
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
