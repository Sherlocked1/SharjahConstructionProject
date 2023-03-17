import { io } from "socket.io-client";

const uri = process.env.REACT_APP_SERVER_URL as string

const socket = io(uri, {reconnectionAttempts:2,autoConnect:true})

export default socket;