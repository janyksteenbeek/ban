import {useEffect, useState} from 'react'
import Message from './components/Message'
import ConnectionLost from "./components/ConnectionLost";
import Header from "./components/Header";
import EmptyState from "./components/EmptyState";
import {Payload} from './types/Payload';
import {Api} from "./services/Api";
import SocketManager from "./services/SocketManager";
import NotRayPort from "./components/NotRayPort";

const VERSION: string = "v0.2.0";

function App() {
    const [messages, setMessages] = useState([]);
    const [connected, setConnected] = useState(false);
    const defaultPortUsed = window.location.port === '23517';
    const clearMessages = () => {
        setMessages([]);
        Api.clearPayloads();
    }
    const [alwaysOnTop, setAlwaysOnTop] = useState(false);


    useEffect(() => {
        Api.fetchPayloads().then((response: any) => {
            setMessages(response);
        })
    }, []);

    useEffect(() => {
        Api.setAlwaysOnTop(alwaysOnTop);
    }, [alwaysOnTop]);


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
        <div id="ban"
             className="min-h-screen w-screen bg-white/50 dark:bg-gray-900/60 text-white font-sans flex flex-col">
            {!connected && (
                <ConnectionLost onClick={reload}/>
            )}
            {!defaultPortUsed && (
                <NotRayPort/>
            )}
            <Header clearMessages={clearMessages} alwaysOnTop={alwaysOnTop}
                    toggleAlwaysOnTop={() => setAlwaysOnTop(!alwaysOnTop)}/>
            <div
                className={"grow flex flex-col mt-16 overflow-y-auto" + (messages.length === 0 ? " justify-center items-center" : "")}>
                <div className="w-full p-4 flex flex-col gap-4">
                    {messages.length === 0 ? (
                        <EmptyState/>
                    ) : messages.map((message: Payload, index: number) => (
                        <div className="mt-4" key={index}>
                            <Message payload={message}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default App
