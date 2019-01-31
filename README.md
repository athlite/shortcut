# A test case; real time twitter streams

Built with hapijs and react

To build `docker build -t twitterstorm-image`

To run `docker run -it --rm --env-file .env -p 3000:3000 --env NODE_ENV=production --name twitterstorm-instance twitterstorm-image`

Important!! Make sure you have these entries in your env-file:

TWITTER_API_KEY="api-key"
TWITTER_API_KEY_SECRET="api-secret-key"
TWITTER_ACCESS_TOKEN="access-token"
TWITTER_ACCESS_TOKEN_SECRET="access-token-secret"

These has to be keys from your own developer account at Twitter!
