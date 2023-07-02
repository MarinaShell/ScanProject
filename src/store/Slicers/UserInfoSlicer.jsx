import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiUserInfo } from "../../API/Api";

const header = {
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("accessToken")
    },
};

export const UserInfo = createAsyncThunk(
    "user/userInfo",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(ApiUserInfo, header);

            return data;
        } catch (error) {
            
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

const initialState = {
    loading: false,
    error: null,
    success: false,
    status: null,
    userInfo: null,
};

const UserInfoSlicer = createSlice({
    name: "userInfo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(UserInfo.fulfilled, (state, action) => {
            state.status = "OK";
            state.loading = false;
            state.success = true;
            state.userInfo = action.payload
        });

        builder.addCase(UserInfo.pending, (state) => {
            state.loading = true;
            state.is_auth = false
            state.error = null;
        });

        builder.addCase(UserInfo.rejected, (state, action) => {
            state.error = action.payload;
            state.status = "BAD";
            state.is_auth = false
        });
    },
});

export default UserInfoSlicer.reducer;
