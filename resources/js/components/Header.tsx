import Logo from "./Logo";

export default function Header(props: { clearMessages: () => void}) {
    return <header
        className="bg-white dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-700 rounded shadow-sm m-2">
        <div className="flex items-center justify-between">
            <Logo/>
            <div className="flex space-x-4">

                <button
                    onClick={props.clearMessages}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:shadow-md">
                    Clear
                </button>
            </div>
        </div>
    </header>;
}
