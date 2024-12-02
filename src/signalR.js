import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export const setupSignalRConnection = (hubUrl) => {
  const connection = new HubConnectionBuilder()
    .withUrl(hubUrl) // Replace with your SignalR hub URL
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build();

  return connection;
};