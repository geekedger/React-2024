export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest", // Добавьте это правило для обработки .jsx файлов
  },
  rootDir: "src",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__test__/__mocks__/fileMock.js",
    "^@app/(.*)$": "<rootDir>/$1",
    "\\.(css)$": "identity-obj-proxy",
  },
  testMatch: [
    "**/__tests__/**/*.jsx",
    "**/?(*.)+(spec|test).jsx",
    "**/__tests__/**/*.tsx",
    "**/?(*.)+(spec|test).tsx",
  ], // Добавьте шаблоны для .tsx файлов, если у вас есть тесты на TypeScript
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], // Добавьте ts и tsx
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
