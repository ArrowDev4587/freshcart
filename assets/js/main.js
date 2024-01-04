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

const s1 = new Swiper('.s1', {
    direction: 'horizontal',
    loop: false,
});

const s2 = new Swiper('.s2', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 6,
    freeMode: true,
    spaceBetween: 0,
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


var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
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