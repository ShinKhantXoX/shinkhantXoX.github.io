
let app_form = document.querySelector('.app-form');

document.querySelector('.apply-now-btn').addEventListener('click',(e) => {
    applyFormShow('block');
});

document.querySelector('.cancel').addEventListener('click',(e) => {
    applyFormShow('none');
    e.preventDefault();
});

function applyFormShow(display) {
    app_form.style.display = display;
    let career = document.querySelector('.career');

    let careerBefore = window.getComputedStyle(career,'::before');
    career.style.setProperty('--careerBefore',display);
}
