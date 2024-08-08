import { useEffect } from "react";

export const usePushStateListener = (callback: (url: string) => void) => {
  useEffect(() => {
    // Сохранение оригинального pushState
    const originalPushState = history.pushState;

    // Переопределение pushState
    history.pushState = function (data, title, url) {
      // Проверка типа url перед вызовом callback
      if (typeof url === "string") {
        originalPushState.apply(history, [data, title, url]);
        callback(url);
      }
    };

    // Восстановление оригинального pushState при размонтировании компонента
    return () => {
      history.pushState = originalPushState;
    };
  }, [callback]);
};
