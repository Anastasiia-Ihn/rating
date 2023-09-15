const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    console.log(ratings.length);
    initRating();
}

function initRating() {
    let ratingActive;
    let ratingValue;

}

const iconSvg = document.querySelector('.icon-heart-svg')
const heartIconElem = document.querySelector('.heart-icon-elem')
console.log(heartIconElem);
heartIconElem.addEventListener('change', onHeart)

function onHeart(e) {console.log(e);
    if (e.currentTarget.checked) {
        console.log(e.currentTarget.checked);
        iconSvg.classList.add('svg-active');
        localStorage.setItem('saveCheckedFavorite', e.target._id);
    } else {
          iconSvg.classList.remove('svg-active');
        localStorage.removeItem('saveCheckedFavorite', e.target._id);
    }
    
}