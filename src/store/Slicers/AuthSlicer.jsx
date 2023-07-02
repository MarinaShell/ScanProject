import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiLogin } from "../../API/Api";

export const fetchAuthorization = createAsyncThunk(
    "Authorization/fetchAuthorization",
    async (userData) => {
        const response = await axios.post(
            ApiLogin, body, header
        )
        return response.data;
    }
);

const initialState = {
    is_Auth: false
}