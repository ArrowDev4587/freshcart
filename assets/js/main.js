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