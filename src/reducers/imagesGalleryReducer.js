const imagesGalleryReducer = (imagesGallery = [], action) => {
  if (action.type === "FETCH_FILM_IMAGES") {
    return action.payload;
  }

  return imagesGallery;
};

export default imagesGalleryReducer;
