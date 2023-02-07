import { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

function useGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const mediaLibraryAsync = async () => {
        let { status } = await MediaLibrary.requestPermissionsAsync()
        let media = await MediaLibrary.getAssetsAsync({
          mediaType: ['photo', 'video'],
        })
        let video = await MediaLibrary.getAssetInfoAsync(media.assets[0])
    
        console.log(video);
      };
      mediaLibraryAsync()
  }, []);

  return photos;
}

export default useGallery;