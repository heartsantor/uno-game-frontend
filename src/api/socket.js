import io from "socket.io-client";

export const socket = io.connect("https://uno-game-mid-api.vercel.app");

socket.reconnectionAttempts = 3;
