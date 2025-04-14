const burger = document.querySelector('#btn-burger');
const mobileContainer = document.querySelector('#mobile-container');
const processVideo = document.querySelector('#video');
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const pause = document.querySelector('#pause')


const beginning = document.querySelector('#beginning')
const middle = document.querySelector('#middle')
const end = document.querySelector('#end')



function currentBeginning() {
    video.currentTime = 5;
}

function currentMiddle() {
    video.currentTime = 7;
}

function currentEnd() {
    video.currentTime = 12;
}


function playVideo() {
    processVideo.play();
}

function pauseVideo() {
    processVideo.pause();
}

function stopVideo() {
    video.pause();
    video.currentTime = 5;
}

beginning.addEventListener('click', () => {
    currentBeginning()
})
middle.addEventListener('click', () => {
    currentMiddle()
})
end.addEventListener('click', () => {
    currentEnd()
})



play.addEventListener('click', () => {
    playVideo();
    console.log('play');
})

stop.addEventListener('click', () => {
    stopVideo();
    console.log('stop');
})
pause.addEventListener('click', () => {
    pauseVideo();
    console.log('pause');
})


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})

/*modal*/

const modalTrigers = document.querySelectorAll('[data-triger-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

function showModal() {
    body.classList.add('overflow-hidden')
    overlay.classList.add('show')
}

function closeModal() {
    const openModal = document.querySelector('.modal.show');
    body.classList.remove('overflow-hidden')
    overlay.classList.remove('show')
    openModal.classList.remove('show')
    stopVideo();
}

modalTrigers.forEach((item) => {
    item.addEventListener('click', function(event) {
        event.preventDefault()

        const dataTriger = item.getAttribute('data-triger-modal')
        const modal = document.querySelector('#' + dataTriger)

        showModal()

        if (modal.classList.contains('video-provecess')) {
            modal.classList.add('show')
            playVideo()
        } else {
            modal.classList.add('show')
        }
    })
})

modalClose.forEach(close => {
    close.addEventListener('click', closeModal)
})

const swiperProduct = new Swiper('.swiper-product', {
    spaceBetween: 24,
    slidesPerView: 1,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1025: {
            slidesPerView: 2,
            spaceBetween: 48
        },
        1233: {
            slidesPerView: 3,
            spaceBetween: 48,
        },
        1560: {
            slidesPerView: 4,
            spaceBetween: 48,
        }
    }
});

/*var init = false;
 var swiperEvents;
 function swiperCard() {
   if (window.innerWidth <= 768) {
     if (!init) {
       init = true;
       swiperEvents = new Swiper(".swiper-events", {
         direction: "horizontal",
         slidesPerView: "auto",
         centeredSlides: true,
         spaceBetween: 32,
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
         },
       });
     }
   } else if (init) {
     swiperEvents.destroy();
     init = false;
   }
 }
 swiperCard();
 window.addEventListener("resize", swiperCard);*/

swiperEvents = new Swiper(".swiper-events", {
    loop: true,
    spaceBetween: 24, 

    navigation: {
        nextEl: '.swiper-events-button-next',
        prevEl: '.swiper-events-button-prev',
    },
});

const swiperEventsMediaQuery = window.matchMedia("(max-width: 1025px)")
function checkedBrakpoint(swiperEventsMediaQuery) {
    if (swiperEventsMediaQuery.matches) {
        return;
    } else {
        swiperEvents.destroy();
    }
}

checkedBrakpoint(swiperEventsMediaQuery);