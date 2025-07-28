# FlyOnUI App demo

## Run locally
```bash
npm install -g pnpm
pnpm install
pnpm run dev
```

## Overview
Make sure it runs as it is, create an empty `./.env` for that. Then head to https://flyonui.com to get components and add them to the project.

In order to connect to the Firebase, use the instructions below. Those steps are optional and not required for the application to run locally.

Enjoy!

## Optional: deploy to Firebase using GitHub actions
In order to setup the project to use the Firebase, first head to https://console.firebase.google.com and register your project. Enable at least the hosting, also the Firestore and the Storage, if needed. Follow the instructions to set up, or simply fill in the Firebase related configuration files in the root directory of this repository.

In order to run the project with Firebase connection locally, create the `./.env` file with the following env-variables:
```text
REACT_APP_FIREBASE_KEY="key"
REACT_APP_FIREBASE_DOMAIN="domain"
REACT_APP_FIREBASE_DATABASE="domain"
REACT_APP_FIREBASE_PROJECT_ID="domain"
REACT_APP_FIREBASE_STORAGE_BUCKET="domain"
REACT_APP_FIREBASE_SENDER_ID="domain"
REACT_APP_FIREBASE_APP_ID="domain"
REACT_APP_FIREBASE_LOCATION_ID="domain"
```
Fill in with the configuration values, this file is ignored by the git, so it won't be published in the repository.

Make sure to configure `.github/deploy.yml` properly by adding all necessary environment variables.

No not expose the FIREBASE_KEY! Instead, it can be added to the GitHub secrets in the project settings section. The key itself should also be part of the Firebase project configuration.

The last secret is needed the FIREBASE_SERVICE_ACCOUNT credentials, which can be created in the Firebase project settings -> Service accounts. Click Generate token in the bottom and add a secret to the GitHub actions configuration.

Don't forget to replace `xxx` with your Firebase project name, for example, in the `.firebase.rc` and `firebase.json` files, etc.

## Google authorization
Enable Google auth in the Firebase console. Go to the `./src/component/Login.tsx` and replace the code with the commented section.
