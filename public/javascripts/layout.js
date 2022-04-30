// app.js
// global layout script

resizePage = () => {
    const navibarHeight = 50, logoWidth = 150;
    const vertmenuWidth = 200;
    const vertmenuBorderWidth = 3;
    const hideButtonHeight = 50;
    const hideButtonPadding = 8, hideButtonMargin = 8, hideButtonBorder = 2;
    const menuTabsBottonPadding = 10;

    const navibar = document.getElementById('navibar');
    const logo = document.getElementById('logo');
    const vertmenu = document.getElementById('vertmenu');
    const content = document.getElementById('content');
    const hideButton = document.getElementById('hide-button');
    const hideButtonImg = document.getElementById('hide-btn-img');
    const showButton = document.getElementById('show-button');
    const showButtonImg = document.getElementById('show-btn-img');
    const menuTabs = document.getElementById('menu-tabs');
    const menuTabsBottom = document.getElementById('tabs-bottom');

    navibar.style.height = navibarHeight + 'px';
    logo.style.height = navibarHeight + 'px';
    logo.style.width = logoWidth + 'px';
    logo.style.lineHeight = navibarHeight + 'px';
    vertmenu.style.borderWidth = vertmenuBorderWidth + 'px';
    vertmenu.style.width = vertmenuWidth - vertmenuBorderWidth * 2 + 'px';
    content.style.width = window.innerWidth -
        (vertmenu.style.display == 'none' ?
            hideButtonHeight - 2 * hideButtonMargin : vertmenuWidth) + 'px';
    content.style.height = window.innerHeight - navibarHeight + 'px';
    hideButton.style.height = hideButtonHeight + 'px';
    hideButtonImg.style.height = hideButtonHeight -
        (hideButtonPadding + hideButtonMargin + hideButtonBorder) * 2 + 'px';
    hideButtonImg.style.padding = hideButtonPadding + 'px';
    hideButtonImg.style.margin = hideButtonMargin + 'px';
    hideButtonImg.style.borderWidth = hideButtonBorder + 'px';
    showButton.style.width = hideButtonHeight - 2 * hideButtonMargin + 'px';
    showButton.style.height = window.innerHeight - navibarHeight + 'px';
    showButtonImg.style.height = hideButtonHeight -
        (hideButtonPadding + hideButtonMargin + hideButtonBorder) * 2 + 'px';
    showButtonImg.style.padding = hideButtonPadding + 'px';
    showButtonImg.style.margin = hideButtonMargin + 'px';
    showButtonImg.style.marginLeft = showButtonImg.style.marginRight = '0';
    menuTabs.style.height = window.innerHeight - navibarHeight - vertmenuBorderWidth * 2 - hideButtonHeight - menuTabsBottonPadding + 'px';
    menuTabsBottom.style.height = menuTabsBottonPadding + 'px';
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

showVert = (show) => {
    setCookie('hide', 'true', show ? 0 : 1);
    document.getElementById('vertmenu').style.display = show ? 'unset' : 'none';
    document.getElementById('show-button').style.display = show ? 'none' : 'unset';
    resizePage();
}
