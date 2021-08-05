$('.slide-nav').on('click', function (e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
        // get button data-slide
        next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
        return false;
    } else {
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function () {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    }
});


// navbar javascript

let openMenu = document.getElementsByClassName('fa-bars')[0]
let closeMenu = document.getElementsByClassName('fa-times')[0]
let navlinks = document.getElementsByClassName('nav-links')[0]

openMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("0")
});

closeMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("100%")
});


// slider automation

var count = 1;

setInterval(function(){
    document.getElementById('click' + count).click();
    count++;
    if(count > 3){
        count = 1;
    }
}, 5000);