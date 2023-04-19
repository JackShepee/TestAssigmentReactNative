import axios from 'axios';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export const fetchPhotos = () => async dispatch => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
      params: {
        client_id: '5-7VGvtCX-Lw4nVxxpxrNQcKc-YYX3mHGjjBG-FYNwE', // added Key directly right now, not to bother with .env files
        per_page: 50,
      },
    });
    const photos = response.data.map(photo => ({
      id: photo.id,
      title: photo.description || 'Untitled',
      user: {
        name: photo.user.name,
      },
      urls: {
        small: photo.urls.small,
        full: photo.urls.full,
      },
    }));
    dispatch({
      type: FETCH_PHOTOS,
      payload: photos,
    });
  } catch (error) {
    console.error(error);
  }
};
