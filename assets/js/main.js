function langDropdown() {
    var lang_div = document.getElementsByClassName("lang-dropdown-content")[0];
    if (lang_div.style.display === "none") {
        lang_div.style.display = "block";
    } else {
        lang_div.style.display = "none";
    }
}

function accountDropdown() {
    var account_div = document.getElementsByClassName("account-dropdown-content")[0];
    if (account_div.style.display === "none") {
        account_div.style.display = "flex";
    } else {
        account_div.style.display = "none";
    }
}

window.onload = function() {
    if (window.innerWidth < 550) {
        document.getElementById("myTopnav").style.display = "none";
    }
    else {
        document.getElementById("myTopnav").style.display = "flex";
    }
}

window.onresize = function() {
    if (window.innerWidth < 550) {
        document.getElementById("myTopnav").style.display = "none";
    }
    else {
        document.getElementById("myTopnav").style.display = "flex";
    }
}

function openNav() {
    var myTopnav = document.getElementById("myTopnav");
    if (myTopnav.style.display === "flex") {
        myTopnav.style.display = "none";
        console.log("none");
    }
    else {
        myTopnav.style.display = "flex";
        console.log("flex");
    }
}

const s1 = new Swiper('.s1', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
});

const s2 = new Swiper('.s2', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 6,
    freeMode: true,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 6,
        },
    },
});

function showLoginPass() {
    var x = document.getElementById("login_password");
    if (x.type === "password") {
    x.type = "text";
        var pass_icon = document.getElementsByClassName("fa-eye")[0];
        pass_icon.classList.remove("fa-eye");
        pass_icon.classList.add("fa-eye-slash");
    } else {
    x.type = "password";
        var pass_icon = document.getElementsByClassName("fa-eye-slash")[0];
        pass_icon.classList.remove("fa-eye-slash");
        pass_icon.classList.add("fa-eye");
    }
}

function showRegisterPass() {
    var x = document.getElementById("register_password");
    if (x.type === "password") {
    x.type = "text";
        var pass_icon = document.getElementsByClassName("fa-eye")[0];
        pass_icon.classList.remove("fa-eye");
        pass_icon.classList.add("fa-eye-slash");
    } else {
    x.type = "password";
        var pass_icon = document.getElementsByClassName("fa-eye-slash")[0];
        pass_icon.classList.remove("fa-eye-slash");
        pass_icon.classList.add("fa-eye");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var accInputs = document.querySelectorAll(".productsAccordionInput");

    function uncheckOtherAccordions(currentAccordion) {
        accInputs.forEach(function(accInput) {
            if (accInput !== currentAccordion && accInput.checked) {
                accInput.checked = false;
                accInput.dispatchEvent(new Event('change')); // Bu satırı ekledik
            }
        });
    }

    accInputs.forEach(function(accInput) {
        accInput.addEventListener("change", function() {
            var panel = this.nextElementSibling;
            if (this.checked) {
                panel.style.maxHeight = panel.scrollHeight + "px";
                uncheckOtherAccordions(this);
            } else {
                panel.style.maxHeight = null;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var checkInputs = document.querySelectorAll(".checkoutAccordionInput");

    function uncheckOtherAccordions(currentAccordion) {
        checkInputs.forEach(function(checkInput) {
            if (checkInput !== currentAccordion && checkInput.checked) {
                checkInput.checked = false;
                checkInput.dispatchEvent(new Event('change')); // Bu satırı ekledik
            }
        });
    }

    checkInputs.forEach(function(checkInput) {
        checkInput.addEventListener("change", function() {
            var panel = this.nextElementSibling;
            if (this.checked) {
                panel.style.maxHeight = panel.scrollHeight + "px";
                uncheckOtherAccordions(this);
            } else {
                panel.style.maxHeight = null;
            }
        });
    });
}
);


var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    freeMode: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


function activateTab(tabName) {
    var i;
    var x = document.getElementsByClassName("productDetailsTabContent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}

const dropContainer = document.getElementById("dropcontainer")
    const fileInput = document.getElementById("images")

    dropContainer.addEventListener("dragover", (e) => {
    // prevent default to allow drop
    e.preventDefault()
}, false)

dropContainer.addEventListener("dragenter", () => {
    dropContainer.classList.add("drag-active")
})

dropContainer.addEventListener("dragleave", () => {
    dropContainer.classList.remove("drag-active")
})

dropContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    dropContainer.classList.remove("drag-active")
    fileInput.files = e.dataTransfer.files
})

let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    for (let i = 1; i <= 5; i++) {
        const star = document.querySelector(`.reviewsFormRatingStars i:nth-child(${i})`);
        if (i <= rating) {
            star.style.color = 'orange';
            star.style.float = 'left';
        } else {
            star.style.color = 'darkgrey';
            star.style.float = 'left';
        }
    }
}

function activateDeliveryTab(tabName, tabItem) {
    var i;
    var x = document.getElementsByClassName("deliveryTimeTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    var y = document.getElementsByClassName("deliveryTimeTabItem");
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "#d3d3d3";
    }
    document.getElementById(tabName).style.display = "flex"; 
    document.getElementById(tabItem).style.backgroundColor = "green";
    document.getElementById(tabItem).style.color = "white";
}

function openAddressModal() {
    document.getElementById("addressModal").style.display = "flex";
}

function closeAddressModal() {
    document.getElementById("addressModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("addressModal")) {
        document.getElementById("addressModal").style.display = "none";
    }
}

function activateFilters() {
    if (document.getElementById("filters").style.display == "none") {
        document.getElementById("filters").style.display = "block";
    }
    else {
        document.getElementById("filters").style.display = "none";
    }
}