import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/gallery`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}


export default { list }