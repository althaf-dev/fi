#!/bin/bash
echo $1
environment=$1
echo ${environment}
# src_path=./src/envs/.env.${environment}
# target_path=./src/envs/.env
# if [ ! -f ${src_path} ]; then
#     echo "env file not found for environment ${environment}!"
#     exit
# fi
# cp ${src_path} ${target_path}
yarn start-dev