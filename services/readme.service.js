import axios from "../utils/axios"

const getReadMeData = () => axios.get("readme")

export {
  getReadMeData
} 