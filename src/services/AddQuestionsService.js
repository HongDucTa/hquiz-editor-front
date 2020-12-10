import { serverURL } from '../config.json'
const axios = require('axios')

axios.defaults.baseURL = serverURL

const addQuestion = async (question) => {
    const res = await axios.post('/question/add', question)
    return res
}

export default addQuestion