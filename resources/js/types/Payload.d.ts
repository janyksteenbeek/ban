import {Origin} from "./Origin";

export type Payload = {
    uuid: string
    type: string
    message: string
    date: Date
    origin: Origin
}
