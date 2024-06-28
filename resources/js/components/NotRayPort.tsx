export default function NotRayPort() {
    const currentPort = window.location.port;

    return <div className="flex items-center justify-center bg-gray-900 px-6 py-2.5 fixed bottom-0 left-0 w-full z-50">
        <p className="text-sm leading-6 text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
            </svg>
            <div>
                <strong className="font-semibold">Ban is started on non-standard port {currentPort}</strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx="1" cy="1" r="1"/>
                </svg>
                <span>This usually happens when another instance is running. Try again or set 'RAY_PORT={window.location.port}' in your .env.</span>
            </div>
        </p>
    </div>;
}
