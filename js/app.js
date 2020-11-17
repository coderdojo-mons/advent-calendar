(function (document) {

    'use strict';

    const days = document.querySelectorAll('.day');
    for (const day of days) {
        day.addEventListener('click', e => {
            const door = e.currentTarget.firstElementChild;
            if (door.classList.contains('flip')) {
                door.classList.remove('flip');
            } else {
                door.classList.add('flip');
            }
        });
    }

})(document);