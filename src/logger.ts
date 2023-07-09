export function createLogger() {
   return {
    info: (...args: any[]) => console.log(`[info]:`, ...args),
    warning: (...args: any[]) => console.log(`[warning]:`, ...args),
    error: (...args: any[]) => console.log(`[error]:`, ...args),
   }
}
