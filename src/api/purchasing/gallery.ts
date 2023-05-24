import axios from "axios";

const urlAPI = 'http://localhost:3002/purchasing'

const list = async (page:number) => {
    try {
        const result = await axios.get(`${urlAPI}/gallery/${page}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}


export default { list }