import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConstructionRequest } from "../../features/core/models/constructionRequestion";

interface RequestsSliceStateProp {
    constructionRequests:ConstructionRequest[]
}

const initialState : RequestsSliceStateProp = {
    constructionRequests:[]
};

export const requestsSlice = createSlice({
    name:'requests',
    initialState,
    reducers:{
        loadRequests:(state,action:PayloadAction<ConstructionRequest[]>)=>{
            state.constructionRequests = action.payload;
        },
        addRequest:(state,action:PayloadAction<ConstructionRequest>)=>{
            state.constructionRequests = [...state.constructionRequests,action.payload]
        },
        updateRequest:(state,action:PayloadAction<ConstructionRequest>)=>{
            const requests = state.constructionRequests.filter((req)=>req._id !== action.payload._id);
            state.constructionRequests = [...requests,action.payload]
        },
        removeRequest:(state,action:PayloadAction<string>)=>{
            state.constructionRequests = state.constructionRequests.filter((req)=>req._id !== action.payload);
        }
    }
})

const { reducer: RequestsReducer, actions: RequestsActions } = requestsSlice;

export {RequestsActions,RequestsReducer}
