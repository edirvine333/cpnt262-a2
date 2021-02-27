'use strict'                            //  makes sure that all syntax errors show in the console

const imageArray = [                    //  declaring the imageArray globally for use in both events
  '/assets/images/guitar_1920.jpg',
  '/assets/images/guitar_275.jpg',
  '/assets/images/guitar_sharpen.jpg',
  '/assets/images/guitar_gs.jpg',
  '/assets/images/guitar_sepia.jpg',
  '/assets/images/guitar_negative.jpg', 
  '/assets/images/guitar_blur.jpg',
  '/assets/images/guitar_levels.jpg',
  '/assets/images/guitar_brush.jpg',
  '/assets/images/guitar_vignette.jpg',
  '/assets/images/guitar_grain.jpg',
  '/assets/images/guitar_glass.jpg',  
];

const button = document.querySelector('button');
const galleryButton = document.querySelector('.gallery');
let galleryImage= document.querySelector('.galleryImage');
let figcaption = document.querySelector('figcaption');
let randomImage = document.querySelector('randomImage')

let linkOne = document.querySelector('.info_link');
let linkTwo = document.querySelector('.artist_link');
let linkThree = document.querySelector('.image_link');

button.addEventListener('click', function() {

  const images = [                        //  an array of objects with the name images
    {
      id: 0,
      title: "Original Image",
      description: "The orginal unedited image.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 1,
      title: "Resize",
      description: "A resized image",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 2,
      title: "Sharpen",
      description: "The image with a sharpen edit.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 3,
      title: "Grayscale",
      description: "The image in grayscale.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 4,
      title: "Sepia",
      description: "The image with a sepia filter.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 5,
      title: "Negative",
      description: "The negative of the original.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 6,
      title: "Blur",
      description: "The image with a blur filter.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 7,
      title: "Levels",
      description: "The image with adjusted levels.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 8,
      title: "Vignette",
      description: "The image with a vignette border.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 9,
      title: "Film Grain",
      description: "The image with a film grain filter.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 10,
      title: "Frosted Glass",
      description: "The image with a frosted glass filter.",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },

    {
      id: 11,
      title: "Brush Strokes",
      description: "The image with a brush stroke filter",
      width: 275,
      height: 162,
      imgURL: "https://en.wikipedia.org/wiki/Electric_guitar",
      credit: "Piro",
      artistURL: "https://pixabay.com/users/piro4d-2707530/",
      creditURL: "https://pixabay.com/photos/guitar-electric-guitar-2925274/"
    },
  ];

  let nameOP = document.querySelector('.name');
  let idOP = document.querySelector('.id');
  let descriptOP = document.querySelector('.description');
  let dimOP = document.querySelector('.dim');
  
  let rand = Math.floor(Math.random() * images.length);

  randomImage = randomImage.setAttribute("src", imageArray[rand]);

  nameOP.innerHTML = `Image Name:   ${images[rand].title}`;
  idOP.innerHTML = `ID Number:    ${images[rand].id}`;
  descriptOP.innerHTML = `Description:    ${images[rand].description}`;
  dimOP.innerHTML =`Dimensions:   ${images[rand].width} x ${images[rand].height}`;
  
  linkOne.href = images[rand].imgURL;
  linkTwo.href = images[rand].artistURL;
  linkThree.href = images[rand].creditURL;
});

galleryButton.addEventListener('click', function() {
 
  // forEach() array item, output to the page
  imageArray.forEach(callback);

  function callback(item, index) {
    console.log(galleryImage);

  galleryImage = galleryImage.setAttribute("src", imageArray[index]);
  figcaption.innerHTML = item;  
  };

  //for (let i=0; i < 12; i++) {
    //img  = img.setAttribute("src", imageArray[i]);
    //figcaption = imageArray[i];
  //}

});
