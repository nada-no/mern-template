#!/bin/bash

set -e

npm install
npm run dev
#npm run start

tail -f /dev/null