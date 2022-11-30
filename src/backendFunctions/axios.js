import axios from "axios";

const TGI_FD = axios.create({
    baseURL: "http://localhost:302/v1/",
}) 

export default TGI_FD