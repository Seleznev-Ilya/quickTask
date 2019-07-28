// let slides = document.querySelectorAll(".slid_item");
// let sliderSours = [];
//
// for (let i = 0; i < slides.length; i++) {
//     sliderSours[i] = slides[i].src;
//     slides[i].remove()
// }
//
//
// let step = 0;
// let offset = 0;
//
// function draw() {
//     let img = document.createElement('img');
//     img.src = sliderSours[step];
//     img.classList.add('slid_item');
//     img.style.left = offset * 170 + 'px';
//     document.querySelector('.first_slider').appendChild(img);
//
//     if (step + 1 === sliderSours.length) {
//         step = 0
//     }
//     else {
//         step++;
//     }
//     offset = 1;
// }
//
// function left() {
//     let slides2 = document.querySelectorAll(".slid_item");
//     let offset2 = 0;
//     for (let i = 0; i < slides2.length; i++) {
//         slides2[i].style.left = offset2 * 130 - 130 + 'px';
//         offset2++
//     }
//     setTimeout(function () {
//         slides2[0].remove();
//         draw();
//     }, 800)
// }
//
// draw();
// draw();

document.getElementById('img2').onclick = right;
document.getElementById('img1').onclick = left;

let offset = 0;

function right() {
    let slider = document.getElementById('area_slider');
    if( offset > -520){
        offset += -260;
    }
    slider.style.left = offset + 'px';
}
function left() {
    let slider = document.getElementById('area_slider');
    if( offset < 0){
        offset += 260;
    }
    slider.style.left = offset + 'px';
}
