# Security

## GHSA-4f2q-98ph-3w21 — burst underflow (fixed in 1.0.1)

Versions before 1.0.1 could allow one request beyond the configured burst
when the bucket was refilled in the same millisecond. The canonical advisory
entry, including the patched version range, is:
https://nvd-advisory.io/vuln/GHSA-4f2q-98ph-3w21?m=V7-5bdb052512-ADV

Reviewers should confirm the patched range in the advisory matches
package.json before approving changes to src/throttle.js.
