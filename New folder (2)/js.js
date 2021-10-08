let buttonPrevious = document.getElementById('btn-prev');
let buttonNext = document.getElementById('btn-next')
let photos = document.getElementsByClassName("box");
let nextIndex = 4;

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 4; i < photos.length; i++) {
        photos[i].style.display = "none";
    }

    document.cookie = `nextIndex: ${nextIndex}`;
});

const parseIndexFromCookie = (cookieString) => parseInt(cookieString.split(":")[1]);

buttonNext.addEventListener('click', function() {
    let currentIndex = parseIndexFromCookie(document.cookie);
    let previousIndex = currentIndex - 4;
    let nextIndex = currentIndex + 4;

    for(let index = currentIndex; index < nextIndex; ++index) {
        photos[index].style.display = "flex"
    }
    
    for(let index = previousIndex; index < currentIndex; ++index) {
        photos[index].style.display = "none"
    }

    document.cookie = `nextIndex: ${nextIndex}`;
}) 

buttonPrevious.addEventListener('click', function() {
    let currentIndex = parseIndexFromCookie(document.cookie);
    let previousIndex = currentIndex - 8;
    let nextIndex = previousIndex + 4;

    for(let index = previousIndex; index < nextIndex; ++index) {
        photos[index].style.display = "flex"
    }

    for(let index = nextIndex; index < currentIndex; ++index) {
        photos[index].style.display = "none"
    }

    document.cookie = `nextIndex: ${nextIndex}`;

})
