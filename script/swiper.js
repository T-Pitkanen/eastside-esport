export const swiper = new Swiper('.swiper', {
	effect: 'coverflow',
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	mousewheel: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});
