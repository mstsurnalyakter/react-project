import React, { useEffect, useState } from "react";
import createConnection from "./Chat";

const ChatRoom = ({roomId}) =>{
    const [serverUrl, setSververUrl] = useState(`http:/localhost:5173`);

    useEffect(() =>{
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () =>{
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return(
        <>
            <label>
                Server URL:{` `};
                <input
                    value={serverUrl}
                    onChange={e => setSververUrl(e.target.value)}
                />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    )

}

 

 export const App2 = () => {
    const [roomId, setRoomId] = useState(`general`);
    const [show, setShow] = useState(false);
  return (
    <>
        <label>
            Choose the chat room{` `}
            <select 
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
            >
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
        </label>
        <button
        onClick={() => setShow(!show)}
        >
            {show ? "Close chat":"Open chat"}
        </button>
        {show && <hr />}
        {show && <ChatRoom roomId={roomId} />}
    </>
  )
}

 