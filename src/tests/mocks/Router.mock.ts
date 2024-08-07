import { NextRouter } from "next/router";

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    asPath: "/",
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(), // Добавьте forward
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isReady: true, // Добавьте isReady
    isPreview: false, // Добавьте isPreview
    isLocaleDomain: false, // Установите значение по умолчанию
    ...router,
  };
}
