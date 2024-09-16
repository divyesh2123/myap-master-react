import { createSlice } from '@reduxjs/toolkit'

const initialState = 0;

const counterslice = createSlice({
  name: 'd',
  initialState,
  reducers: {

    Inc : (state,payload)=>{

        return state+1

    }


  }
});

export const {Inc} = counterslice.actions

export default counterslice.reducer