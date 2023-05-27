import axios from "axios";

const urlAPI = 'http://localhost:3002/facility'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/`)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list }