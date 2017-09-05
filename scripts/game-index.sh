#!/bin/bash

# sh scripts/sign-in-json.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/"
URL_PATH="/get"
# API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/"
# URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"
  --header "Content-Type: application/json" \


echo
