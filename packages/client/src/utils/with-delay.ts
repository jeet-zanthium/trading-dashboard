export function withDelay<T>(
  importPromise: Promise<T>,
  delayMs: number
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const module = await importPromise;
      resolve(module);
    }, delayMs);
  });
}
