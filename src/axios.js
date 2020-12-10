import axios from 'axios'

const instance = axios.create({
  baseURL:"https://us-central1-clone-4b9f3.cloudfunctions.net/api"
  // 'http://localhost:5001/clone-4b9f3/us-central1/api'   <---- Local host endpoint
})

export default instance