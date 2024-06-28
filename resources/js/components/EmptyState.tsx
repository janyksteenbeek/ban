import Logo from "./Logo";

export default function EmptyState() {
    const examples = [
        'ray("Hello world!")',
        'ray("Hi there " . $user->name)',
        'ray($user->toArray())',
        'ray(date("Y-m-d"))',
    ]

    return <div
        className="grow h-full flex flex-col items-center justify-center gap-4 text-center text-gray-900 dark:text-white">
        <Logo className="w-24 h-24 mx-auto text-black/20 dark:text-gray-500"/>
        <div className="mt-2 block text-sm font-semibold text-gray-900 dark:text-white">
            Send your first debug message: <span
            className="font-mono bg-gray-100 dark:bg-gray-600 dark:text-gray-100 rounded p-1">{examples[Math.floor(Math.random() * examples.length)]}</span>
        </div>
    </div>;
}
