import './App.css';
import { useState, useEffect } from 'react';
import { fetchImages } from './components/images-api';
import SearchBar from './components/searchBar/searchBar';
import ImageList from './components/imagesList/imagesList';
import LoadMore from './components/loadMore/loadMore';
import Loader from './components/loader/loader';
import ImageModal from './components/imageModal/imageModal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getImages() {
      if (query === '') {
        return;
      }
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages({ query, page });
        setImages(prevImages => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  const handleSearch = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (largeImageUrl) => {
    setShowModal(true);
    setLargeImageUrl(largeImageUrl);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageUrl('');
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageList images={images} openModal={openModal} />}
      {error && <b>Oops... Something went wrong, try to reload page!</b>}
      {images.length > 0 && !isLoading && <LoadMore handleLoadMore={handleLoadMore} />}
      {isLoading && <Loader />}
      <ImageModal closeModal={closeModal} modalIsOpen={showModal} modal={largeImageUrl} />
    </div>
  );
};

export default App;