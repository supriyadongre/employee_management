import { createSlice } from "@reduxjs/toolkit";


const counterReducer = createSlice({
    name:"counter1",
    initialState:{
        count:0
    },
    reducers:{
        increment(state, action){
            state.count = state.count+ action.payload
        },
        decrement(state, action){
            state.count =state.count- action.payload
        },
      
    }
});
export const counterAction = counterReducer.actions
export default counterReducer.reducer