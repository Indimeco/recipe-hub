#!/bin/bash
set -eu

SERVER_DIR='../packages/server/.serverless'
ZIP_NAME='recipehub-graphql.zip'

if [ -d "$SERVER_DIR" ]; then
    ZIP_FILE="${SERVER_DIR}/${ZIP_NAME}"
    ZIP_SIZE=`du -sb $ZIP_FILE | cut -f1`

    if [[ $ZIP_SIZE -gt 1000000 && $ZIP_SIZE -lt 8000000 ]]; then
        echo "===> Copying ZIP_FILE last modified $(stat -c %y $ZIP_FILE)"
        cp $ZIP_FILE .
    else
        echo "===> ZIP_FILE failed size constraints at $ZIP_SIZE bytes. Please verify integrity of build."
        exit 1
    fi
else
    echo "===> Failed to find directory at $SERVER_DIR"
    exit 1
fi
