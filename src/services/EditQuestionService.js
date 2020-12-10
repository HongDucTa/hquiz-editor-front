import { serverURL } from '../config.json'
const axios = require('axios')

axios.defaults.baseURL = serverURL

const editQuestion = async (id, question) => {
    console.log(id)
    console.log(question)
    const res = await axios.put('/question/update/' + id, { question: question })
    return res
}

export default editQuestion