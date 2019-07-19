import React from "react";
import { connect } from "react-redux";
import { fetchFilmImages } from "../../actions";

class ImagesGallery extends React.Component {
  componentDidMount() {
    this.props.fetchFilmImages(this.props.filmId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filmId !== prevProps.filmId) {
      this.props.fetchFilmImages(this.props.filmId);
    }
  }

  render() {
    const { imagesGallery } = this.props;
    return imagesGallery.map((image, i) => (
      <img
        key={i}
        alt={`gallery piece${i}`}
        src={`http://image.tmdb.org/t/p/w300${image.file_path}`}
      />
    ));
  }
}

const mapStateToProps = state => {
  return {
    imagesGallery: state.imagesGallery
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFilmImages
  }
)(ImagesGallery);
