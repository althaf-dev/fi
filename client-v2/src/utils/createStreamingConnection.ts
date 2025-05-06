/**
 * Creates a streaming connection using EventSource to receive real-time data from the specified endpoint.
 *
 * @param {string} endpoint - The endpoint URL for the streaming connection.
 * @param {string} payload - The payload to send with the connection request.
 * @param {Function} onDataReceived - The callback function to handle the received data.
 * @returns {EventSource} - The EventSource instance representing the streaming connection.
 */
const createStreamingConnection = (endpoint: string, payload: string, onDataReceived: (data: any) => void) => {
    const eventSource = new EventSource(`${endpoint}?payload=${payload}`);

    eventSource.onmessage = (event) => {
        const { data } = event || {};

        const response = JSON.parse(data);

        onDataReceived(response);
    };

    return eventSource;
};

export default createStreamingConnection;
