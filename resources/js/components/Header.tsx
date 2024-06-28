interface HeaderParams {
    clearMessages: () => void;
    alwaysOnTop: boolean;
    toggleAlwaysOnTop: () => void;
}

export default function Header(props: HeaderParams) {
    return <header
        className="fixed top-0 z-50 left-0 dark:bg-gray-800/90 w-full px-4 py-4 border-b border-gray-300 dark:border-gray-700 shadow-lg bg-gray-100/90 drag-bar">
        <div className="flex items-center justify-end gap-2">
            <div className="flex items-center">
                <button
                    onClick={props.toggleAlwaysOnTop}
                    type="button"
                    className={
                        "no-drag rounded-full px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:shadow-md hover:cursor-pointer" + (props.alwaysOnTop ? " bg-gray-800 text-gray-100 ring-gray-200 hover:bg-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:ring-gray-600" : " bg-white")
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor"
                         className={"size-5" + (props.alwaysOnTop ? " text-gray-100" : " text-gray-900")}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"/>
                    </svg>

                </button>

            </div>
            <button
                onClick={props.clearMessages}
                type="button"
                className="no-drag rounded-full bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:shadow-md hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
                </svg>
            </button>
        </div>
    </header>;
}
