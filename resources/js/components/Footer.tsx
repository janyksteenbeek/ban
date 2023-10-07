import ExternalLink from "./ExternalLink";

export default function Footer(props: { version: string }) {
    return <footer>
        <div className="mx-auto py-12 px-4 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
                <ExternalLink href="https://x.com/janyksteenbeek" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg
                        className="h-4 w-4" fill="currentColor"
                        viewBox="0 0 1668.56 1221.19">
                        <path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"/>
                    </svg>
                </ExternalLink>
                <ExternalLink href="https://github.com/janyksteenbeek/ban"
                              className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                </ExternalLink>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-center text-xs leading-5 text-gray-500">
                    Ban <span
                    className="font-mono bg-gray-100 dark:bg-gray-600 dark:text-gray-100 rounded p-1 mx-1">{props.version}</span>
                    is an <ExternalLink href="https://github.com/janyksteenbeek/ban" target="_blank">open source
                    project</ExternalLink> by
                    <ExternalLink href="https://github.com/sponsors/janyksteenbeek" target="_blank"
                                  className="font-medium ml-1 inline-block text-gray-600 dark:text-gray-400 hover:underline"> Janyk
                        Steenbeek</ExternalLink>
                </p>
            </div>
        </div>
    </footer>;
}
