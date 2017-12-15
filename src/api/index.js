import axios from 'axios'

axios.defaults.baseURL = '/open/api/'

export const getTopNewsList = () =>
  axios.get('getNewlist/1', {
    params: {
      paperCount: 4,
      paperIndex: 0
    }
  }).then(({ data }) => data.map(item => {
    let { id, title, picurl, info } = item
    return { id, title,picurl, info }
  }))

export const getTopAuthorList = () =>
  axios.get('getTopAuthorList').then(({ data }) => data.map(item => {
    let { id, name, picurl, info } = item
    return { id, name, picurl, info }
  }))

export const getWorks = () =>
  axios.get('getWorkList').then(({ data }) => data.map(item => {
    let { id, name, picurl, author, authorname } = item
    return { id, name, picurl, author, authorname }
  }))

export const getArtists = () =>
  axios.get('getAuthorList').then(({ data }) => data.map(item => {
    let { id, name, picurl, info } = item
    return { id, name, picurl, info }
  }))

export const getAllWorks = () =>
  axios.get('getWorkList').then(({ data }) => data.map(item => {
    let { id, name, picurl, content, author, authorname, authorpicurl } = item
    return { id, name, picurl, content, author, authorname, authorpicurl }
  }))

export const getAllArtists = () =>
  axios.get('getAuthorList').then(({ data }) => data.map(item => {
    let { id, name, picurl, info, content } = item
    return { id, name, picurl, info, content }
  }))

export const getArtistAllWorks = params =>
  axios.get('getAuthorWork/' + params.id).then(({ data }) => {
    let works = data.Art_works
    return works.map(item => {
      let { id, name, picurl, content } = item
      return { id, name, picurl, content }
    })
  })

export const getNews = ({ type, page }) =>
  axios.get('getNewlist/' + type, {
    params: {
      paperCount: 4,
      paperIndex: page
    }
  }).then(({ data }) => data.map(item => {
    let { id, publishAt, picurl, info } = item
    return { id, publishAt, picurl, info }
  }))

export const getNewsCount = ({ type }) =>
  axios.get('getNewlistCount/' + type).then(({ data }) => data.Count)

export const getNew = ({ id }) =>
  axios.get('getNew/' + id).then(({ data }) => data.map(item => {
    let { title, content, publishAt } = item
    return { title, content, publishAt }
  }))
