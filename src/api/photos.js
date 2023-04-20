import axios from 'axios';

export async function getPhotos() {
  const { data } = await axios.get(
    'https://picsum.photos/v2/list?page=1&limit=9'
  );
  return data;
}
