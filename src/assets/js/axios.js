import axios from "axios"
// 2. Додайте за допомогою пакетного менеджеру бібліотеку Axios до проєкту. Сформуйте в окремому файлі инстанс Axios, сконфігуруйте його та імпортуйте за потребою.
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: { "Content-Type": "application/json" },
})

export default axiosInstance
