const path = require('path');
const DotEnv = require('dotenv');

const ENV_PATH = path.resolve('./', '.env');
const SECRETS_PATH = path.resolve('./', '.secrets');

module.exports = {
  extends() {
    const env = DotEnv.config({ path: ENV_PATH }).parsed;
    const secrets = DotEnv.config({ path: SECRETS_PATH }).parsed;

    Object.keys(env).forEach(function (key) {
      process.env[key] = env[key];
    });

    Object.keys(secrets).forEach(function (key) {
      process.env[key] = secrets[key];
    });
  }
}
