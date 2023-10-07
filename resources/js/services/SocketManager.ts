import Echo from "laravel-echo";
import React from "react";

import {Payload} from "../types/Payload";
import Pusher from "pusher-js";
import {NewPayloadEvent} from "../types/api/NewPayloadEvent";

export default class SocketManager {
    private echo: Echo;
    private readonly setMessages: React.Dispatch<React.SetStateAction<Payload[]>>;
    private readonly clearMessages: () => void;
    private readonly setConnected: React.Dispatch<React.SetStateAction<boolean>>;

    constructor(
        setMessages: React.Dispatch<React.SetStateAction<Payload[]>>,
        clearMessages: () => void,
        setConnected: React.Dispatch<React.SetStateAction<boolean>>
    ) {
        // @ts-ignore
        window.pusher = Pusher;
        // Initialize Echo with Pusher.
        this.echo = new Echo({
            broadcaster: 'pusher',
            key: 'ban-frontend',
            wsHost: '127.0.0.1',
            wsPort: 6001,
            wssPort: 6001,
            forceTLS: false,
            encrypted: false,
            enabledTransports: ['ws'],

            disableStats: true,
            cluster: ''
        });

        this.setMessages = setMessages;
        this.clearMessages = clearMessages;
        this.setConnected = setConnected;
    }

    private handlePayload = (event: NewPayloadEvent) => {
        this.setMessages((prevMessages: Payload[]) => [...prevMessages, <Payload>event.payload]);
    };

    private handleConnect = () => {
        this.setConnected(true);
    };

    private handleDisconnect = () => {
        this.setConnected(false);
    };

    private handleClear = () => {
        this.clearMessages();
    };

    public connect = () => {
        this.echo.connect();
        this.echo.channel("payloads")
            .subscribed(this.handleConnect)
            .error(this.handleDisconnect)
            .listen(".new", this.handlePayload);

        // Handle connection and disconnection events
        this.echo.connector.pusher.connection.bind("connected", this.handleConnect);
        this.echo.connector.pusher.connection.bind("disconnected", this.handleDisconnect);
    };

    public disconnect = () => {
        this.echo.leave("payloads");
    };
}
