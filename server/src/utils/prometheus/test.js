/**
 * Test endpoint for server load test.
 * This endpoint is used to test the different status code counts
 * and validate if 2xx, 3xx, 4xx, 5xx status code counts are accurate.
 */


// return http status code 200 - 500 given a number between 1 - 4
const randomStatusCode = (number) => {
    switch (number) {
        case 1:
            return 200
        case 2:
            return 300
        case 3:
            return 400
        case 4:
            return 500
        default:
            return 500
    }
};

// 
/**
 * Test endpoint for local testing of prometheus: /test-metrics
 * It simulates a lag of 1s - 5s for 5% of all request
 * It also randomly sends a status code having status code between 200 - 500
 */
const testMetricsController = async (req, res) => {
    // Simulate a delay in ~5% of all requests
    if (Math.random() <= 0.05) {
        const sleep = (ms) => {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        };
        // Simulate random 1s - 5s lag for the request
        await sleep(Math.round(Math.random() * 5000));
    }
    // Get a random number between 1 - 4
    const randomNum = Math.round(Math.random() * 3);
    // Get a http status code between 200 - 500
    const statusCode = randomStatusCode(randomNum);
    res.status(statusCode).send('ok');
}

module.exports = {
    testMetricsController
}
