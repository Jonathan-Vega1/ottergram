var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";

var pictures = ["img/otter1.jpg", "img/otter2.jpg", "img/otter3.jpg", "img/otter4.jpg", "img/otter5.jpg", "img/FlexBoxFroggyQ24.png", "img/GridGardenQ28.png"];
var titles = ["Stayin' Alive", "How Deep Is Your Love", "You Should Be Dancing", "Night Fever", "To Love Somebody", "Two Out of Three Ain't Bad", "Where the Lines Overlap"];

var counter = 0;

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
  //return setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

function reply_click(clicked_id) {
  'use strict';
  if (clicked_id == "right") {
    counter += 1;
  } else {
    counter -= 1;
  }

  if (counter > 6 && clicked_id == "right") {
    counter = 0;
  }

  if (counter < 0 && clicked_id == "left") {
    counter = 6;
  }

  setDetails(pictures[counter], titles[counter]);
  //credit goes to shamittomar, of StackOverflow, for showing how to use the button tag.
}

initializeEvents();
