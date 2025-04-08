
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

const swiper = new Swiper('.swiper', {
    spaceBetween: 48,
   slidesPerView: 4,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  });