import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiLogin } from "../../API/Api";

const header = {
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
};

export const userLogin = createAsyncThunk(
    "auth/userLogin", 
    async ({login, password}) => {
        const {data} = await axios.post(ApiLogin, { login, password }, header)
        localStorage.setItem('userLogin', login)
        localStorage.setItem('accessToken', data.accessToken)
    return data;
});

const accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;

const initialState = {
    loading: false,
    userInfo: [],
    userToken: null,
    error: null,
    success: false,
};

const AuthSlicer = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action))
    }
})
