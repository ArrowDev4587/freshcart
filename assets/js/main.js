function langDropdown() {
    var lang_div = document.getElementsByClassName("lang-dropdown-content")[0];
    if (lang_div.style.display === "none") {
        lang_div.style.display = "block";
    } else {
        lang_div.style.display = "none";
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