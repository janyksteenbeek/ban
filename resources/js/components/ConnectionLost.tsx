export default function ConnectionLost(props: { onClick: () => void }) {
    return <div className="flex items-center justify-center bg-gray-900 px-6 py-2.5">
        <p className="text-sm leading-6 text-white flex items-center">
            <svg viewBox="0 0 2 2" className="mx-2 inline h-2 w-2 text-orange-300 animate-pulse fill-current"
                 aria-hidden="true">
                <circle cx="1" cy="1" r="1"/>
            </svg>
            <strong className="font-semibold">Connection lost</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx="1" cy="1" r="1"/>
            </svg>
            <span>We're having trouble connecting to the live socket. We'll keep trying,
                or you can <a href="#" onClick={props.onClick} className="underline">manually reconnect</a>.</span>
        </p>
    </div>;
}
