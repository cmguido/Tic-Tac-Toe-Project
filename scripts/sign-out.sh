#!/bin/bash

# ID=2 sh scripts/sign-out.sh
# ID=8 sh scripts/sign-out.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
