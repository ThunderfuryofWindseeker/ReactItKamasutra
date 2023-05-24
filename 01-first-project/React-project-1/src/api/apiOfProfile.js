import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" }
})


export const profileAPI = {
    getProfile: (userId) => {
        return (
            instance.get(`/profile/${userId}`).then(response => response.data)
        )
    },
    getStatus: (userId) => {
        return (

            instance.get(`/profile/status/${userId}`).then(response => response.data)
        )

    },
    updateStatus: (status) => {
        return (
            instance.put(`/profile/status`, { status: status })
        )
    }
};