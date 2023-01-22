import io from "socket.io-client";

let socket;

export const init = () => {
   console.log("connecting . . .");
   socket = io("http://localhost:3001", {
      transports: ["websocket"],
   });

   socket.on("connect", () => {
      console.log("connected successfully");
   });
};

export const send = (color) => {
   socket.emit("newColor", color);
};

export const subscribe = (callback) => {
   socket.on("receive", (color) => {
      console.log(color);
      callback(color);
   });
};
