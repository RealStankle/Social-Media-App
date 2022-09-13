import { createContext, useContext, useState, useEffect } from 'react';
import { fetchPhotos, options } from '../utils/fetchPhotos';
import axios from 'axios';

const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const fetchPhotosData = async () => {
      const photosData = await fetchPhotos(
        'https://api.unsplash.com/photos/random',
        {
          ...options,
          params: { ...options.params, query: 'nature' },
          cancelToken: cancelToken.token,
        }
      );

      setPhotos(photosData);
    };

    fetchPhotosData();

    return () => {
      cancelToken.cancel();
    };
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
