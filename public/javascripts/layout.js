// app.js
// global layout script

resizePage = () => {
    const navibarHeight = 50, logoWidth = 150;
    const vertmenuWidth = 200;
    const vertmenuBorderWidth = 3;
    const hideButtonHeight = 50;
    const menuTabsBottonPadding = 10;

    const navibar = document.getElementById('navibar');
    const logo = document.getElementById('logo');
    const vertmenu = document.getElementById('vertmenu');
    const content = document.getElementById('content');
    const hideButton = document.getElementById('hide-button');
    const menuTabs = document.getElementById('menu-tabs');
    const menuTabsBottom = document.getElementById('tabs-bottom');

    navibar.style.height = navibarHeight + 'px';
    logo.style.height = navibarHeight + 'px';
    logo.style.width = logoWidth + 'px';
    logo.style.lineHeight = navibarHeight + 'px';
    vertmenu.style.borderWidth = vertmenuBorderWidth + 'px';
    vertmenu.style.width = vertmenuWidth - vertmenuBorderWidth * 2 + 'px';
    content.style.width = window.innerWidth - vertmenuWidth + 'px';
    content.style.height = window.innerHeight - navibarHeight + 'px';
    hideButton.style.height = hideButtonHeight + 'px';
    menuTabs.style.height = window.innerHeight - navibarHeight - vertmenuBorderWidth * 2 - hideButtonHeight - menuTabsBottonPadding + 'px';
    menuTabsBottom.style.height = menuTabsBottonPadding + 'px';
}

window.addEventListener('resize', resizePage);
