import {API_URL, headers} from "../constants/api";
import {serialize} from "./helpers";

export const api = {
    get: (url, params) => {
        try {
            return fetch(`${API_URL}${url}${serialize(params)}`, {headers}).then(res => {
            }).catch(e => {
                console.log(e)
            })
        } catch (e) {
            console.log({e})
        }
    },
    post: (url, data) => {
        const body = JSON.stringify(data);
        return fetch(`${API_URL}${url}`, {body, headers, method: 'POST'}).then(async res => {
            const response = await res;
            const {status} = response;
            if (status === 200) {
                return response.json();
            } else {
                throw await response.json();
            }
        }).catch(e => {
            throw e;
        })
    }
};