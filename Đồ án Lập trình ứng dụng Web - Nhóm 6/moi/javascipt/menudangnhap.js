var icon = document.getElementById('userIcon3');
var menu = document.getElementById('userMenu3');

icon.addEventListener('mouseenter', function() {
    menu.style.display = 'block';
});

icon.addEventListener('mouseleave', function() {
    menu.style.display = 'none';
});

menu.addEventListener('mouseenter', function() {
    menu.style.display = 'block';
});

menu.addEventListener('mouseleave', function() {
    menu.style.display = 'none';
});
