export default function EmptyState() {
    const examples = [
        'ray("Hello world!")',
        'ray("Hi there " . $user->name)',
        'ray($user->toArray())',
        'ray(date("Y-m-d"))',
    ]

    return <div
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
        <div className="mt-2 block text-sm font-semibold text-gray-900 dark:text-white">
            Send your first message: <span className="font-mono bg-gray-100 dark:bg-gray-600 dark:text-gray-100 rounded p-1">{examples[Math.floor(Math.random() * examples.length)]}</span>
        </div>
    </div>;
}