import { serverURL } from '../config.json'
const axios = require('axios')

axios.defaults.baseURL = serverURL

const deleteQuestion = async (id) => {
    const res = await axios.delete('/question/delete/' + id)
    return res
}

export default deleteQuestion