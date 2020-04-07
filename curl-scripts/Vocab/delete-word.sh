'use strict'

curl "http://localhost:4741/vocabs/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
