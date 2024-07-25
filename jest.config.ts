export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest", // Добавьте это правило для обработки .jsx файлов
  },
  rootDir: "src",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/tests/mocks/",
    "^@app/(.*)$": "<rootDir>/$1",
    "\\.(css)$": "identity-obj-proxy",
  },
  testMatch: [
    "**/tests/**/*.jsx",
    "**/?(*.)+(spec|test).jsx",
    "**/tests/**/*.tsx",
    "**/?(*.)+(spec|test).tsx",
  ], // Добавьте шаблоны для .tsx файлов, если у вас есть тесты на TypeScript
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], 
  collectCoverage: false,
  coverageReporters: ["text", "text-summary"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 60,
      lines: 60,
      statements: 80,
    },
  },
};
