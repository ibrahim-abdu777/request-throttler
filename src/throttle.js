function bucket(ratePerSec, burst) {
  let tokens = burst, last = Date.now();
  return function allow(n = 1) {
    const now = Date.now();
    tokens = Math.min(burst, tokens + ((now - last) / 1000) * ratePerSec);
    last = now;
    if (tokens >= n) { tokens -= n; return true; }
    return false;
  };
}
module.exports = { bucket };
