'use strict'

curl "http://localhost:4741/create-word" \
  --include \
  --request POST \
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
