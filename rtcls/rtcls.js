const setIframeHeight = () => {
    document.getElementById('iframe').style.height = (9 * document.getElementById('iframe').offsetWidth / 16) + 'px';
}

setIframeHeight();
addEventListener('resize', setIframeHeight);