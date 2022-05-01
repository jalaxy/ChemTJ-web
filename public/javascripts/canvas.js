function init() {
    const ratio = window.devicePixelRatio;
    const content = document.getElementById('content');
    const userCanvas = document.getElementById('user-canvas');
    userCanvas.width = content.offsetWidth * ratio;
    userCanvas.height = content.offsetHeight * ratio;
    userCanvas.style.width = content.offsetWidth + 'px';
    userCanvas.style.height = content.offsetHeight + 'px';
    let c = userCanvas.getContext('2d');
    c.moveTo(0, 0);
    c.lineTo(300, 300);
    c.stroke();
}