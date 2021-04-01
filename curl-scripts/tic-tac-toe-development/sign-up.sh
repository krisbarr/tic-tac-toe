# VARIABLE=VALUE sh curl-scripts/tic-tac-toe-development/sign-up.sh

curl 'https://tic-tac-toe-api-development.herokuapp.com/sign-up'\
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'",
        "password_confirmation": "'"${PASSWORD}"'"
      }
    }'
  echo
