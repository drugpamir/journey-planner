const defaultOptions = {};

/**
 * Запрашивает объект с данными по выбранной ссылке
 * @param {string | URL} url - Ссылка для GET-запроса
 * @returns - Объект данных формата json
 */
export async function fetchJson(
  url: string | URL,
  options = defaultOptions,
  timeoutMsecs = 5000,
) {
  try {
    const signal = AbortSignal.timeout(timeoutMsecs);
    options = { ...options, signal };
    const result = await fetch(url, options);
    if (result.ok) {
      return result.json();
    }
  } catch (e) {
    console.log(e);
  }
}
