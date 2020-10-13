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
    "^@dcentities$": "<rootDir>/packages/entities",
    "^@dcentities/model$": "<rootDir>/packages/entities/model",
    "^@dcdatabase$": "<rootDir>/packages/database",
    "^@dcdatabase/model$": "<rootDir>/packages/database/model",
    "^@dcquiz$": "<rootDir>/packages/quiz"
  }
}
