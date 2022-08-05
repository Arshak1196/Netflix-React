import { API_KEY } from './constants/constants'
export const trending = `trending/all/day?api_key=${API_KEY}`
export const originals = `discover/tv?api_key=${API_KEY}&with_nerwork=213`
export const actions = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`