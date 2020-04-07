'use strict'

curl "http://localhost:4741/update-word" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"" \
  --data '{
  "vocabs": {
    "word": "'"${WORD}"'",
    "definition": "'"${DEFINITION}"'",
    "sounds_like": "'"${SOUNDS_LIKE}"'",
    "synonyms": "'"${SYNONYM}"'",
    "antonyms": "'"${ANTONYM}"'",
    "sentence": "'"${SENTENCE}"'"
  }
}'

echo
