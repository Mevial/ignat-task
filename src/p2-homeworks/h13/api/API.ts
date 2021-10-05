import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})


export const API = {
    createPost(value: boolean) {
        return instance.post<{success: boolean}, any >('auth/test', {success: value})
    },
}
