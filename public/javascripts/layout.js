// app.js
// global layout script

resizePage = () => {
    const navibarHeight = 50, logoWidth = 150;
    const vertmenuPaddingTop = 16, vertmenuWidth = 200;

    const navibar = document.getElementById('navibar');
    const logo = document.getElementById('logo');
    const vertmenu = document.getElementById('vertmenu');
    const content = document.getElementById('content');

    navibar.style.height = navibarHeight + 'px';
    logo.style.height = navibarHeight + 'px';
    logo.style.width = logoWidth + 'px';
    logo.style.lineHeight = navibarHeight + 'px';
    vertmenu.style.paddingTop = vertmenuPaddingTop + 'px';
    vertmenu.style.width = vertmenuWidth + 'px';
    vertmenu.style.height = window.innerHeight - navibarHeight - vertmenuPaddingTop + 'px';

    //content.style.padding = contentPaddingY + 'px ' + contentPaddingX + 'px ' +
    //    contentPaddingY + 'px ' + contentPaddingX + 'px';
    //content.style.margin = contentMarginY + 'px ' + contentMarginX + 'px ' +
    //    contentMarginY + 'px ' + contentMarginX + 'px';
    //content.style.borderWidth = '0 0 0 0';
    //content.style.borderStyle = 'none';
    content.style.width = window.innerWidth - vertmenuWidth + 'px';
    content.style.height = window.innerHeight - navibarHeight + 'px';
}

window.addEventListener('resize', resizePage);
