import axios from "../utils/axios"

const getReadMeData = (file) => axios.get(`readme?file=${file}`)

export {
  getReadMeData
} 