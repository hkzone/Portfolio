# Portfolio

<img src="./demo/demo.gif" alt="Portfolio" width="800px">

For live demo please visit 👉 https://hkzone.github.io

## Description

My portfolio web-site, which I created with an aim to be modern&sleek looking. Contact Form is build with a Serverless, AWS Lambda and AWS SES.

## Technologies Used

- JavaScript
- HTML / [SASS](https://sass-lang.com/)
- [Serverless](https://www.serverless.com/)
- [AWS SES](https://aws.amazon.com/ses/)
- [Webpack 5](https://github.com/webpack/webpack)

## Getting Started

### Prerequisites

Make sure Node and npm are installed from the terminal

```bash
$ node -v
$ npm -v
```

---

### Installation

1. Fork this repo, then clone the app down to your computer:

   ```bash
   $ git clone https://github.com/hkzone/Portfolio.git
   ```

2. `cd` into your new folder and install all the
   dependencies by running:

   ```bash
   $ npm i
   ```

3. Run the app in development mode at http://localhost:8082/

   |       Command        |         Action         |
   | :------------------: | :--------------------: |
   | `npm run build-prod` |     Build project      |
   |    `npm run dev`     | Run webpack dev server |

---

## Deploy Serverless Contact Form handling with AWS Lambda and AWS SES

1. Register [AWS SES](https://aws.amazon.com/ses/)

2. Create new app to deploy to AWS Lambda with [Serverless](https://www.serverless.com/)

3. Configure environment variables by creating new `secrets.json` file in the `my-lambda-app` directory. Fill the file with variables as bellow:

   ```bash
   {
   "EMAIL": "*your-email-registered-with-AWS-SES@email.com*",
   "DOMAIN": "*https://your-domain.com*",
   "NODE_ENV": "*dev or prod*"
   }
   ```

4. Change `const urlAWS` in `index.js` to your AWS endpoint provided by Serverless.

5. Deploy to Serverless.

---

## Error handling

- User will be informed about invalid email address or any errors during form submission.
