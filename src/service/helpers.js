function serialize(params) {
    if (typeof params === "object") {
        let serializedUrl = '?';
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                serializedUrl += `${key}={params[key]}`
            }
        }
        return serializedUrl;
    }
}

export {serialize};