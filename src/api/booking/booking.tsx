import axios from 'axios'

const GetData = async () => {
    try {
        const result = await axios.get('http://localhost:3001/booking-order/')
        return result.data
    } catch (error) {
        return error
    }
}

const GetDataHotel = async () => {
    try {
        const result = await axios.get('http://localhost:3001/hotel/')
        return result.data
    } catch (error) {
        return error
    }
}


const GetFacilitiesHotel = async (id: any) => {
    try {
        const result = await axios.get('http://localhost:3001/hotel/facilities/', id)
        return result.data
    } catch (error) {
        return error
    }
}

const GetHotelDetails = async (id: any) => {
    try {
        const result = await axios.get('http://localhost:3001/hotel/'+ id)
        return result.data
    } catch (error) {
        return error
    }
}

const GetReviews = async () => {
    try {
        const result = await axios.get('http://localhost:3001/hotel/reviews')
        return result.data
    } catch (error) {
        return error
    }
}

const findData = async (id: any) => {
    try {
        const result = await axios.get('http://localhost:3001/booking-order/' + id)
        return result.data
    } catch (error) {
        return error
    }
}

const Create = async (payload: any) => {
    try {
        const result = await axios.post('http://localhost:3001/booking-order/', payload)
        return result
    } catch (error) {
        return error
    }
}

const Delete = async (payload: any) => {
    try {
        console.log(payload)
        const result = await axios.delete('http://localhost:3001/booking-order/'+ payload, payload)
        return result
    } catch (error) {
        return error
    }
}

// const upload = async (payload:any) => {
//     try {
//         const result = await axios.post(`http://localhost:3001/booking-order/upload`, payload)
//         return result
//     } catch (error) {
//         return error
//     }
// }

const Update = async (payload: any) => {
    try {
        const result = await axios.put('http://localhost:3001/booking-order/' + payload.id, payload)
        return result
    } catch (error) {
        return error
    }
}

export default {
    GetData,
    Create,
    Update,
    findData,
    // upload,
    Delete,
    GetDataHotel,
    GetFacilitiesHotel,
    GetReviews,
}