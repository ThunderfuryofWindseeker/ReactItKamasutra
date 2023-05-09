import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0`,
    headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" }
})


export let getUsers = (currentPage=1,pageSize=5) => {
    return (
        instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    )
}


export let getUsers2 = (currentPage=1,pageSize=5) => {
    return (
        instance.get(`/follow?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    )
}

