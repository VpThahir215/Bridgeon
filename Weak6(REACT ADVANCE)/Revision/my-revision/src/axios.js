import axios, {Axios, create} from 'axios'
export const api=create({
    baseURL:"http://localhost:3001/"
})
export default api