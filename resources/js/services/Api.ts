import {Payload} from "../types/Payload";

export class Api {
    static async fetchPayloads(): Promise<Payload[]> {
        const response = await fetch('/api/payloads');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        return jsonData.data.map((item: any) => ({
            ...item,
            date: new Date(item.date)
        })) as Payload[];
    }

    static async shellLink(uri: string): Promise<Response> {
        // POST /api/shell-link
        return await fetch('/api/shell-link', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({uri: uri})
        });
    }

    static async clearPayloads(): Promise<Response> {
        return fetch('/api/payloads', {
            method: 'DELETE'
        });
    }
}
