module.exports = {
  "roots": [
    "packages"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "^@dclib$": "<rootDir>/packages/lib",
    "^@dcdefinition$": "<rootDir>/packages/definition",
    "^@dcdatabase$": "<rootDir>/packages/database"
  }
}
