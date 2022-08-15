import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios';

export const postTrnasferAuth = createAsyncThunk("post/transfer", async (props) => {
    const result = {};

    const authAxios = Axios.create({
        baseURL: 'https://fazzpay.herokuapp.com/',
        headers : {
            Authorization: `Bearer ${props.token}`
        }
    })
    
    try {
        const values = {
            receiverId: props.receiverId,
            amount: props.amount,
            notes: props.notes
        }
        const {data} = await authAxios.post(`https://fazzpay.herokuapp.com/transaction/transfer`, values);
        console.log(data);
        return data.data
    } catch (error) {
        result.error = error
        return result
    }
});