import { NextRouter } from "next/router";

// Определение расширенного типа с методом refresh
type ExtendedNextRouter = NextRouter & {
  refresh?: jest.Mock;
};

export function createMockRouter(
  router: Partial<ExtendedNextRouter>,
): ExtendedNextRouter {
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
    forward: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isReady: true,
    isPreview: false,
    isLocaleDomain: false,
    ...router,
  };
}
