import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios';

export const getUserAuth = createAsyncThunk("user/profile", async (props) => {
    const result = {};

    const authAxios = Axios.create({
        baseURL: 'https://fazzpay.herokuapp.com/',
        headers : {
            Authorization: `Bearer ${props.token}`
        }
    })

    try {
        const {data} = await authAxios.get(`https://fazzpay.herokuapp.com/user/profile/${props.id}`);
        return data.data
    } catch (error) {
        result.error = error
        return result
    }
});