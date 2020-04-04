#!/bin/bash

curl "http://localhost:4741/vocabs" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
