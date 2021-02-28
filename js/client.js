'use strict'                                                     //  makes sure that all syntax errors show in the console

const imageArray = [                                             //  declaring the imageArray globally for use in both events
  'assets/images/guitar_1920.jpg',
  'assets/images/guitar_275.jpg',
  'assets/images/guitar_sharpen.jpg',
  'assets/images/guitar_gs.jpg',
  'assets/images/guitar_sepia.jpg',
  'assets/images/guitar_negative.jpg', 
  'assets/images/guitar_blur.jpg',
  'assets/images/guitar_levels.jpg',
  'assets/images/guitar_brush.jpg',
  'assets/images/guitar_vignette.jpg',
  'assets/images/guitar_grain.jpg',
  'assets/images/guitar_glass.jpg',  
];

const button = document.querySelector('button');                //  gripping to the HTML elements
const galleryButton = document.querySelector('.gallery');
let galleryImage= document.querySelector('.galleryImage');
let figcaption = document.querySelector('figcaption');
let randomImage = document.querySelector('.randomImage')

let linkOne = document.querySelector('.info_link');
let linkTwo = document.querySelector('.artist_link');
let linkThree = document.querySelector('.image_link');

button.addEventListener('click', function() {                   //  listens for the click event on the first button

  const images = [                                              //  an array of objects with the name images
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

  let nameOP = document.querySelector('.name');                     //  grips to the .name class
  let idOP = document.querySelector('.id');                         //  grips to the .id class
  let descriptOP = document.querySelector('.description');          //  grips to the .description class
  let dimOP = document.querySelector('.dim');                       //  grips to the .dim class
  
  let rand = Math.floor(Math.random() * images.length);             //  declares the "rand" variable and assigns a rounded random number

  randomImage.src = imageArray[rand];                               //  sets the src attribute of the <img> element to using "rand" as the index

  nameOP.innerHTML = `Image Name:   ${images[rand].title}`;         //  outputs
  idOP.innerHTML = `ID Number:    ${images[rand].id}`;
  descriptOP.innerHTML = `Description:    ${images[rand].description}`;
  dimOP.innerHTML =`Dimensions:   ${images[rand].width} x ${images[rand].height}`;
  
  linkOne.href = images[rand].imgURL;                               //  links
  linkTwo.href = images[rand].artistURL;
  linkThree.href = images[rand].creditURL;
});

galleryButton.addEventListener('click', function() {       //  listens for the click event on the second button
 
  imageArray.forEach(output);                              //  the method forEach() calls the function "output" 

  function output (item, index) {                          //  the function "output" passes the arguments item and index
  galleryImage.src = imageArray[index];                    //  sets the src attribute for the img element for the gallery
  figcaption.innerHTML = item;                             //  sets the figure caption content to be the file name of the image
  };

});

//  ********************************************  DESIGN FLAWS  ******************************************************

//  During the coding process, I anticipated that the images would display one after another in a column.
//  Unfortunately, they display one on top of the other.  I recognize now that there is only one <img> element, and the
//  source is being changed by the forEach() loop over and over again until the last image is called.  Oops :(
//  
//  The links only work after the first button has been pushed.  This is because they are being called from the array of objects.
//  I may be able to declare the array of objects globally, but not sure if this would be best practice.

//  ******************************************************************************************************************


