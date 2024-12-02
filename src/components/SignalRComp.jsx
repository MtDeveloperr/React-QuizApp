import React, { useEffect, useState } from "react";
import { setupSignalRConnection } from "../signalR";

const SignalRComponent = () => {
    console.log('SignalRComponent component rendered');
  const [messages, setMessages] = useState([]);
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const connect = async () => {
      const hubUrl = "wss://localhost:7219/notifications-hub"; // Replace with your hub URL
      const newConnection = setupSignalRConnection(hubUrl);

      newConnection.on("ReceiveMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      try {
        await newConnection.start();
        console.log("SignalR Connected.");
      } catch (error) {
        console.error("SignalR Connection Error: ", error);
      }

      setConnection(newConnection);
    };

    connect();

    return () => {
      if (connection) {
        connection.stop();
      }
    };
  }, []);

  const sendMessage = async (message) => {
    if (connection && connection.state === "Connected") {
      try {
        await connection.invoke("SendMessage", message); // Replace with your hub method
        console.log("Message sent!");
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };

  return (
    <div>
      <h1>SignalR Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <button onClick={() => sendMessage("Hello from React!")}>
        Send Message
      </button>
    </div>
  );
};

export default SignalRComponent;
