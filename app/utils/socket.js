import { io } from "socket.io-client";
const socket = io.connect("http://192.168.1.188:4000");
export default socket;
