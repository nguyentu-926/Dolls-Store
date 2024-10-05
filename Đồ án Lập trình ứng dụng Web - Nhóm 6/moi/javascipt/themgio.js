document.addEventListener("DOMContentLoaded", function() {
    const gio1Elements = document.querySelectorAll('.gio1');
    gio1Elements.forEach(function(gio1) {
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = 'Thêm vào giỏ hàng';
        gio1.appendChild(tooltip);

        gio1.addEventListener('click', function() {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
            setTimeout(function() {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            }, 1500); // 1.5 seconds
        });
    });
});
