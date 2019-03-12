$(document).ready(function() {
    let link = $('.menu-link'),
        menu = $('.menu'),
        nav_link = $('.menu a');

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    nav_link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });

});