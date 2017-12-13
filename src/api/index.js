import axios from 'axios'

axios.defaults.baseURL = '/api'

export const getIndexArtists = () => axios.get('/indexArtists')

export const getOneArtist = () => axios.get('/oneArtist')

export const getAllArtists = () => axios.get('/allArtists')

export const getAllWorks = () => axios.get('/allWorks')

export const getLatestNews = () => axios.get('/latestNews')

