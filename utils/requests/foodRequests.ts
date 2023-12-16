import axios from "axios";


import { BASE_URL } from "../lib/envvar";




const foodRequets = {
    getRestaurants: async () => {
        let res: {
            status: number;
            data: any;
            message: string
        } = {
            status: 0,
            data: {},
            message: ""
        }

        return await axios.post(
            BASE_URL
        ).then((response) => {

            // console.log(response.data["restaurants"])
            res.status = response.status;
            res.data = response.data;

            return res.data;
        })
            .catch((err) => {
                if (err.response) {
                    res.status = err.response.status;
                    res.data = err.response.data;
                } else {
                    res.status = 500;
                    res.data = {};
                }
                res.message = err.message;
                return res;
            });
    }
}


async function myFunc() {
    console.log(await foodRequets.getRestaurants())
}

myFunc()
export default foodRequets