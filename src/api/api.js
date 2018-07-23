import axios from 'axios';
import Filter from 'bad-words';
import striptags from 'striptags';

const filter = new Filter();
const API_URL = 'https://api.flickr.com/services/rest/';

const DEFAULT_PARAMS = {
  api_key: process.env.REACT_APP_FLICKR_API_KEY,
  safe_search: 1,
  per_page: 20,
  format: 'json',
  nojsoncallback: 1,
  extras: 'owner_name,description,tags'
};

if (!process.env.REACT_APP_FLICKR_API_KEY) {
  console.error('No Flickr API key found. Please refer to documentation.');
}

/**
 * Returns latest photos from public Flickr feed.
 * @param {string} [tags] Tags to filter by.
 * @return Promise
 */
export function fetchPhotos (tags = '') {
  // Search does not support parameterless searching, in which case we fall back to getRecent.
  const method = !!tags
    ? 'flickr.photos.search'
    : 'flickr.photos.getRecent'

  const params = {
    ...DEFAULT_PARAMS,
    method,
    tags
  };
  
  return axios
    .get(API_URL, { params })
    .then(({ data }) => {
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Fetched photos ', data);
      }

      if (data.stat === 'fail' || !data.photos) {
        throw new Error('Flickr request failed.');
      }

      const photos = data.photos.photo || [];

      // In this demo we're filtering out photos that _might_ be NSFW. The "safe" flag is
      // set by the user and not entirely reliable.
      return photos
        .filter((item) => !filter.isProfane(item.title))
        .map((item) => {
          item.description._content = striptags(item.description._content);
          return item;
        });
    });
};

export default {
  fetchPhotos
};