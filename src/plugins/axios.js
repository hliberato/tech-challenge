import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'
const http = axios.create({
  baseURL: `${baseUrl}/dev`,
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
})

export default http
