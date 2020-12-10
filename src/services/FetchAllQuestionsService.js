import { serverURL } from '../config.json'
const axios = require('axios')

axios.defaults.baseURL = serverURL

const fetchAllQuestions = async () => {
    const res = await axios.get('/question/fetchAll')
    return res
}

export default fetchAllQuestions