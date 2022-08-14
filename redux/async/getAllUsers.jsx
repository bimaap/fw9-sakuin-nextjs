import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios';

export const getAllUsersAuth = createAsyncThunk("transaction/history", async (props) => {
    const result = {};

    const authAxios = Axios.create({
        baseURL: 'https://fazzpay.herokuapp.com/',
        headers : {
            Authorization: `Bearer ${props.token}`
        }
    })

    try {
        const {data} = await authAxios.get(`https://fazzpay.herokuapp.com/user`, {params: {page: props.page, limit: props.limit, search: props.search, sort: props.sort}});
        return data
    } catch (error) {
        result.error = error
        return result
    }
});