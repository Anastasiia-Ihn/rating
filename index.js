const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    console.log(ratings.length);
    initRating();
}

function initRating() {
    let ratingActive;
    let ratingValue;

}


const heartIconElem = document.querySelector('.heart-icon-elem')
console.log(heartIconElem);
heartIconElem.addEventListener('checked', onHeart)

function onHeart(e) {
    console.dir(e);
}