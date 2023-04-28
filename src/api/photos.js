import axios from 'axios';

export async function getPhotos(page) {
  const { data } = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=10`
  );
  return data;
}
