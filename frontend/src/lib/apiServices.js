import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL

// Retrieves an array of all dog breeds

export const getBreeds = () => {
  return axios.get(`${baseUrl}/dog/breeds`)
}

// Retrieves a filtered array of dog breeds 
// based on a query

export const fetchBreeds = (query) => {
  return axios
  .get(`${baseUrl}/dog/search`, { 
    params: { 
      q: query 
    }
  })
}

// Retrieves an array with a single item 
// containing the image record for the specified
// breed (based off the reference_image_id attribute)

export const loadImage = (image_id) => {
  return axios
  .get(`${baseUrl}/dog/image`, {
    params: { image_id }
  })
}

// Retrieves an array of favorites

export const getFavorites = () => {
  return axios.get(`${baseUrl}/favorites`)
}

// Creates a favorite

export const createFavorite = ({ breed_id, name, image_url }) => {
  return axios.post(`${baseUrl}/favorites`, {
    favorite: { breed_id, name, image_url}
  })
}

// Destroys a favorite

export const destroyFavorite = (id) => {
  return axios.delete(`${baseUrl}/favorites/${id}`)
}