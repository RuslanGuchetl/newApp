const API_URL = 'http://localhost:8080';

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};
const STATUSES = {
    IDLE: 'idle',
    RUNNING: 'running',
    SUCCESS: 'success',
    ERROR: 'error',
    READY: 'ready',
};

export {API_URL, headers, STATUSES};