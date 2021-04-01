# VARIABLE=VALUE sh curl-scripts/tic-tac-toe-development/change-password.sh

curl 'https://tic-tac-toe-api-development.herokuapp.com/change-password'\
    --include \
    --request PATCH \
    --header "Authorization: Bearer ${TOKEN}" \
    --header "Content-Type: application/json" \
    --data '{
      "passwords": {
        "old": "'"${OLDPW}"'",
        "password": "'"${NEWPW}"'"
      }
    }'
  echo
