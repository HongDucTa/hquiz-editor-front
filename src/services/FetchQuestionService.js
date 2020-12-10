import { serverURL } from '../config.json'
const axios = require('axios')

axios.defaults.baseURL = serverURL

const fetchQuestion = async (id) => {
    const res = await axios.get('/question/fetch/' + id)
    return res
}

export default fetchQuestion