#!/bin/bash

build()
{
    docker build . -f docker/Dockerfile -t ts-pdf
}

shell()
{
    docker run -it --rm -v "$(pwd):/app" -w /app node:19-alpine3.15 /bin/sh
    # docker run -it --rm --user $(id -u):$(id -g) -v "$(pwd):/app" -w /app node:19-alpine3.15 /bin/sh
}

if [[ $1 == "build" ]]; then
    build
elif [[ $1 == "shell" ]]; then
    shell 
fi