#!/bin/bash
set -eu

S3_ID=`terraform output recipehub_website_bucket_id`
S3_URI="s3://$S3_ID"
APP_DIR='../packages/app/build'

echo "Found S3_URI as $S3_URI"
echo "Found APP_DIR as $APP_DIR"

if [ -d "$APP_DIR" ]; then

    APP_DIR_SIZE=`du -sb $APP_DIR | cut -f1`

    if [[ $APP_DIR_SIZE -gt 1000000 && $APP_DIR_SIZE -lt 5000000 ]]; then
        echo "===> Uploading $APP_DIR to $S3_URI"
        aws s3 sync $APP_DIR $S3_URI
    else
        echo "===> APP_DIR failed size constraints at $APP_DIR_SIZE bytes. Please verify integrity of build."
        exit 1
    fi
else
    echo "===> Failed to find directory at $APP_DIR"
    exit 1
fi
