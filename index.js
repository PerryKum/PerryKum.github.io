const setNewsHeight = () => {
    document.getElementById('news').style.height = 0.5*document.getElementById('news').offsetWidth + 'px';
}

setNewsHeight();
addEventListener('resize',setNewsHeight);

// Swipers
var swiper1 = new Swiper('#swiper1', {
    autoplay: true,
    observer: true,
    observeParents: true,
});