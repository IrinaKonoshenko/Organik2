const swiper = new Swiper('.swiper', {
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.testimonial__navigation',
        prevEl: '.testimonial__navigation',
    },
    pagination: {
        el: '.testimonial__navigation',
    },
});
