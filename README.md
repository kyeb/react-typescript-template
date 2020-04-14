## Setup instructions

1. Install `yarn` (version 1.22.x)
2. In this directory, run `yarn install` to install all the dependenceies.
3. Set up Prettier to format your code consistently and automatically. The [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) does this very well.

## Development

Run `yarn client` and `yarn server` in separate terminals to start developing.

`yarn build:client` will type-check, compile, and bundle the frontend (everything in `client/`).

`yarn build:server` will type-check and compile the backend (everything in `server/`).

`yarn build` will build the entire project at once.

### Note: type checking

Although [Parcel](https://parceljs.org/) is much faster and easier to configure than Webpack for builds, it _does not perform type checking_. Therefore, we expect development on this project will be done in an IDE that gives significant feedback when type errors occur (such as VSCode). This gives us the speed of Parcel, and the development advantages of Typescript. Running `yarn build:client` performs type checking, _then_ uses Parcel to bundle the JavaScript, but `yarn dev` may continue to work even when type errors are present.
