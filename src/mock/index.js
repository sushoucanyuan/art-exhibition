import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import artists from './data/artists'
import news from './data/news'
import oneArtist from './data/oneArtist'
import allArtists from './data/allArtists'
import allWorks from './data/allWorks'

const mock = new MockAdapter(axios, {
  delayResponse: 0
})

mock
  .onGet('/indexArtists').reply(200, { artists })
  .onGet('/latestNews').reply(200, { news })
  .onGet('/oneArtist').reply(200, { oneArtist })
  .onGet('/allArtists').reply(200, { allArtists })
  .onGet('/allWorks').reply(200, { allWorks })
  
export default mock