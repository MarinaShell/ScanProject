import { configureStore } from '@reduxjs/toolkit';
import AuthSlicer from './Slicers/AuthSlicer';
import UserInfoSlicer from './Slicers/UserInfoSlicer';


export default configureStore({
    reducer: {
        login: AuthSlicer,
        userInfo: UserInfoSlicer,
    }
})