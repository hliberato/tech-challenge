
import http from '../plugins/axios'

export default {
  getByUrl (url) {
    return http
      .get(url)
      .then(res => res.data)
  }
}
