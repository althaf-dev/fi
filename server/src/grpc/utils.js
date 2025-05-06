/**
 * Utility functions for GRPC clients
 */
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

/**
 * Function to return an object with grpc service & client
 * Getting used in each & every grpc module
 *
 * @param {object} params includes SERVICE_PATH, PROTO_PATH, packageKeys, serviceKey & types
 * @returns an object with grpc service & client
 */
const getRpcServiceAndClient = (params) => {
    const {
        SERVICE_PATH, PROTO_PATH, packageKeys, serviceKey, types = {},
    } = params;

    // env variables
    const { PROTOS_PATH } = process.env;

    const packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: types.longs || String,
            enums: types.enums || String,
            defaults: true,
            oneofs: true,
            includeDirs: [PROTOS_PATH, 'node_modules/google-proto-files'],
        },
    );

    const packageDef = grpc.loadPackageDefinition(packageDefinition);
    let service = packageDef;

    packageKeys.forEach((item) => {
        service = service[item];
    });

    if (!serviceKey) {
        return {
            service,
        };
    }

    const client = new service[serviceKey](
        SERVICE_PATH,
        grpc.credentials.createSsl(), // change this to grpc.credentials.createInsecure() if using local server
    );

    return {
        service,
        client,
    };
};

module.exports = {
    getRpcServiceAndClient,
};
