#!/bin/bash
echo $1
environment=$1
echo ${environment}
src_path=./src/envs/.env.${environment}
target_path=./src/envs/.env
if [ ! -f ${src_path} ]; then
    echo "env file not found for environment ${environment}!"
    exit
fi
pwd
cp ${src_path} ${target_path}
# Start the Node.js server
(yarn start) &

# Start the Next.js server
(cd ~/web/client-v2 && rm -rf node_modules && yarn cache clean && yarn install && yarn start)
