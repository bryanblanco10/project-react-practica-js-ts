import io, { Socket } from 'socket.io-client';
const URL = import.meta.env.VITE_NODE_ENV === 'production' ? undefined : 'http://localhost:3000';


// const socket = new io("/");
export const socketIo: Socket = new io(URL, {
  autoConnect: false
});


export const connectSocket = () => {
  socketIo.connect();
  socketIo.on("connect", () => {
    console.log("connected")
  });
}

export const disconnectSocket = () => {
  socketIo.disconnect();
  socketIo.on("disconnect", () => {
    console.log("disconnected")
  })
}

export const listeningEvent = (event: string): Promise<any> => {
  return new Promise((resolve) => {
    socketIo.on(event, (message: any) => {
      resolve(message); // Resuelve la promesa con el mensaje recibido
    });

    // Aquí podrías manejar algún caso de error si lo necesitas
    // socketIo.on('error', (err: any) => {
    //   reject(err);
    // });
  });
}


export const offEvent = (event: string) => {
  socketIo.off(event)
}