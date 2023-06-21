// document.cookie = "SameSite=None; Secure"

const slidesContainer = document.querySelector('.slidesContainer');

const prevBtn = document.querySelector('#slidePrev');
const nextBtn = document.querySelector('#slideNext');

const slide = document.querySelector('.slide');

nextBtn.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevBtn.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});



// for (let i=0; i < reviews.length; i++) {
//     // console.log(reviews[i].stars)

//     //create slide (li)
//     let newSlide = document.createElement('li');
//     let newSlideContent = document.createElement('div');
//     newSlideContent.setAttribute('class', 'newSlideContent');
//     newSlide.setAttribute('class', 'slide');
//     newSlide.setAttribute('id', `slide${i+1}`);

//     //add content to slide
//     //name
//     // let reviewerName = document.createElement('h1');
//     // reviewerName.textContent = reviews[i].name;
//     // newSlide.appendChild(reviewerName);

//     //stars
//     // let reviewStars = document.createElement('div');
//     // reviewStars.setAttribute('class', 'reviewStars');
   

//     // for (let f=0; f<reviews[i].stars; f++) {
//     //     let starImg = document.createElement('img');
//     //     starImg.setAttribute('src', 'star.svg');
//     //     reviewStars.appendChild(starImg)
//     // }
   
//     newSlide.appendChild(reviewStars);

//     //comments
//     let reviewComments = document.createElement('p');
//     reviewComments.textContent = reviews[i].comments;
//     newSlide.appendChild(reviewComments);    

//     //add slide to container (ul)
//     newSlide.appendChild(newSlideContent);
//     slidesContainer.appendChild(newSlide);
// }