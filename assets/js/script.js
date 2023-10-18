function langDropdown() {
    var lang_div = document.getElementsByClassName("lang-dropdown-content")[0];
    if (lang_div.style.display === "none") {
        lang_div.style.display = "block";
    } else {
        lang_div.style.display = "none";
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});