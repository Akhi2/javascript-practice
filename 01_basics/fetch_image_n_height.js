var img = new Image();
img.src = "https://www.pexels.com/photo/grayscale-photo-of-bicycle-beside-seashore-103523/";

// one
img.onload = function(image) {
    console.log(image.path[0].height);
}