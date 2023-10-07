import {useEffect, useState} from 'react'
import Message from './components/Message'
import ConnectionLost from "./components/ConnectionLost";
import Header from "./components/Header";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import {Payload} from './types/Payload';
import {Api} from "./services/Api";
import SocketManager from "./services/SocketManager";

const VERSION: string = "v0.1.0";

function App() {
    const [messages, setMessages] = useState([]);
    const [connected, setConnected] = useState(false);
    const clearMessages = () => {
        setMessages([]);
        Api.clearPayloads();
    }

    useEffect(() => {
        Api.fetchPayloads().then((response: any) => {
            setMessages(response);
        })
    }, []);


    useEffect(() => {
        const socketManager = new SocketManager(
            setMessages,
            clearMessages,
            setConnected
        );

        socketManager.connect();

        return () => {
            socketManager.disconnect();
        };
    }, []);

    const reload = () => {
        window.location.reload();
    }

    return (
        <div id="rei">
            {!connected && (
                <ConnectionLost onClick={reload}/>
            )}
            <div className="container mx-auto h-full flex flex-col">
                <Header clearMessages={clearMessages}/>

                <div className="flex-1 p-4 overflow-y-auto w-full">
                    {messages.length === 0 ? (
                        <EmptyState/>
                    ) : messages.map((message: Payload, index: number) => (
                        <div className="mt-4" key={index}>
                            <Message payload={message}/>
                        </div>
                    ))}
                </div>

                <Footer version={VERSION}/>
            </div>
        </div>
    )
}

export default App
