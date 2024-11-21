import axios  from "axios";
const customAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:5000
})


//customAxios.defaults.headers.get['Authorization'] = 'token'


customAxios.interceptors.request.use(request =>{
    console.log('sent request ', request)
    request.headers.Authorization = 'jjdheuiwefhiewfh'
    return request
})


customAxios.interceptors.response.use(axiosResponse =>{
    // console.log('sent received ', axiosResponse)
    axiosResponse.data = axiosResponse.data.map((value) => {
        return {...value, id: String(value.id).padStart(10, '0')}
    })
    return axiosResponse
})
export default customAxios;