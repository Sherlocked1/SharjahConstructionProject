import React, { createContext } from "react";
import { Socket } from "socket.io-client";
import { ConstructionRequest } from "../../features/core/models/constructionRequestion";

export interface ISocketContextState {
    socket: Socket | undefined;
    constructionRequests:ConstructionRequest[];
    // uid: string;
    // users: string[];
}

export const defaultSocketContextState: ISocketContextState = {
    socket: undefined,
    constructionRequests:[],
    // uid: "",
    // users: []
}

export type TSocketContextActions = 'updateSocket' | 'createConstructionRequest' | 'getConstructionRequests' | 'updateConstructionRequest';

export type TSocketContextPayload = ConstructionRequest | Socket | ConstructionRequest[]

export interface ISocketContextActions {
    type: TSocketContextActions;
    payload: TSocketContextPayload
}

export const SocketReducer = (state: ISocketContextState, action: ISocketContextActions) => {
    console.log(`action :: ${action.type} with payload ${action.payload}`);
    switch (action.type) {
        //Update the socket instance on startup
        case 'updateSocket':
            return { ...state, requests: action.payload as Socket }
        
        //Requests CRUD Operations
        case 'createConstructionRequest':
            return { ...state, requests: action.payload as Socket }
        case 'getConstructionRequests':
            return { ...state, constructionRequests: action.payload as ConstructionRequest[] }
        case 'updateConstructionRequest':
            return { ...state, constructionRequests: action.payload as ConstructionRequest[] }

        default:
            return { ...state }
    }
}

export interface ISocketContextProps {
    SocketState: ISocketContextState;
    SocketDispatch: React.Dispatch<ISocketContextActions>;
}

const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContextState,
    SocketDispatch: () => { }
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;
