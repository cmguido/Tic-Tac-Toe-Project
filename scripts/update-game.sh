#!/bin/bash

# sh scripts/sign-in-json.sh

# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/"
# URL_PATH="/patch?id=$ID"
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}"
  --header "Content-Type: application/json" \
  --data {
  "game": {
    "id": 1,
    "cells": ["","","","","","","","",""],
    "over":false,
    "player_x": {
      "id": 1,
      "email": ""
      },
    "player_o": {
      "id": ,
      "email":
      "dna@dna.com"
    }
  }
}
