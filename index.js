const setNewsHeight = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width >= height) {
        document.getElementById('news').style.height = 0.45 * document.getElementById('news').offsetWidth + 'px';
    } else {
        document.getElementById('news').style.height = 0.8 * document.getElementById('news').offsetWidth + 'px';
    }
}

setNewsHeight();
addEventListener('resize', setNewsHeight);

const setNewsTitleWidth = () => {
    let cWidth = document.getElementById('news').clientWidth;
    let iWidth = document.getElementById('news').offsetWidth;
    let scrollBallWidth = cWidth - iWidth;
    document.getElementById('news_title').style.marginRight = -(scrollBallWidth) + 'px';
}

setNewsTitleWidth();
addEventListener('resize',setNewsTitleWidth);




// Swipers
var swiper1 = new Swiper('#swiper1', {
    autoplay: true,
    observer: true,
    observeParents: true,
    loop: true,
    pagination: {
        el: '.swiper1-pagination',
        clickable: 'ture',
    }
    
});

var swiper2 = new Swiper('#swiper2', {
    autoplay: false,
    observer: true,
    observeParents: true,
})