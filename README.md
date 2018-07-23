# flickr-api-demo

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Consumes the public Flickr API and displays some photos, with a facility to search by tags.

## Set up

Install dependencies

`npm install`

Acquire a Flickr API key.

**Note: only run this locally. Don't expose your Flickr API key somewhere else.**

## Development

Run `REACT_APP_FLICKR_API_KEY=your-key-here npm run start`.

## Build / production mode

Run `REACT_APP_FLICKR_API_KEY=your-key-here npm run build`.

Builds the app for production to the build folder.

To quickly serve this on a local server (requires recent node LTS)

```
npm install -g serve
serve -s build
```