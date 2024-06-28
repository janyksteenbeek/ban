import {Payload} from "../types/Payload";

export default function Message(props: { payload: Payload }) {

    return (
        <div className="grid grid-cols-7 gap-2">
            <div className="col-span-1">
                <p className="text-gray-600 dark:text-gray-400 text-sm">{props.payload.date.toLocaleTimeString()}</p>
            </div>
            <div
                className="col-span-6 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                <div
                    className="bg-gray-100/70 dark:bg-gray-700/80 text-sm p-2 rounded shadow-sm border border-gray-300 dark:border-gray-700">
                    <pre dangerouslySetInnerHTML={{__html: props.payload.message}}></pre>
                </div>
                <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 pt-2">
                        {props.payload.origin.file}:{props.payload.origin.line_number}
                    </p>
                </div>
            </div>
        </div>
    );
}
