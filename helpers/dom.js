export function throttle(callback, delay) {
  let isThrottled = false

  return function (...args) {
    if (!isThrottled) {
      callback.apply(this, args)
      isThrottled = true
      setTimeout(() => {
        isThrottled = false
      }, delay)
    }
  }
}
