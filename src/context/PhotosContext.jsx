import { createContext, useContext, useState, useEffect } from 'react';
import { fetchPhotos, options } from '../utils/fetchPhotos';

const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotosData = async () => {
      const photosData = await fetchPhotos(
        'https://api.unsplash.com/photos/random',
        { ...options, params: { ...options.params, query: 'nature' } }
      );

      setPhotos(photosData);
    };

    fetchPhotosData();
  }, []);

  const values = {
    photos,
  };

  return (
    <PhotosContext.Provider value={values}>{children}</PhotosContext.Provider>
  );
};

const usePhotos = () => useContext(PhotosContext);

export { PhotosProvider, usePhotos };
