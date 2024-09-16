import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[],
    isLoading:false,
    error: {}

}

const userslice = createSlice({
  name: 'userslice',
  initialState,
  reducers: {

        UserRequest : (state,action) =>
        {
            state.isLoading = true;
            state.data= [];
            state.error = {};
            return state;

        },
        UserSuc : (state,action)=>
        {
            state.data = action.payload;
            state.isLoading=false;
            state.error = {};
            return state;

        },
        UserError : (state,action)=>
        {
            state.error = {};
            state.error = action.payload;
            return state;
        }


  }
});

export const {UserRequest,UserSuc,UserError} = userslice.actions

export default userslice.reducer