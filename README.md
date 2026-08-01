# TradeNerva

**Safety-first autonomous trading**

An AI-powered autonomous trading platform for short-term strategies, built around disciplined risk controls and automated order execution to maximize your gain.

[Request private access](mailto:mmnur@example.com?subject=TradeNerva%20Access%20Request)

## Built For Controlled Autonomy

TradeNerva is designed for daily and short-term stock trading workflows where the system can analyze, decide, and execute within explicit safety boundaries.

| Capability | What It Does |
| --- | --- |
| Risk Gates | Daily loss, max notional, trade-count, kill-switch, market freshness, and symbol controls sit before order placement. |
| My Stocks | Manage the tradable universe and per-symbol execution limits without burying controls inside generic settings. |
| Risk Profile | Track market posture, symbol readiness, price ranges, and volatility so pending data is visible instead of mysterious. |
| Trade Performance | Review completed buy/sell activity by stock, filter buy and sale dates separately, and export CSV reports. |

## Product Snapshot

The internal app currently includes:

- Dashboard
- My Stocks
- Risk Profile
- Orders
- Report
- Audit
- Settings
- Help

The implementation is backed by a FastAPI service, mock broker adapter, documented contracts, and automated tests.

## Preview

```text
TradeNerva
├─ Agent controls and kill switch
├─ My Stocks and per-symbol execution limits
├─ Risk Profile with Ready / Waiting data status
├─ Orders, workflows, and trade decisions
└─ Trade Performance Report with CSV export
```

## Access

This public repository is a showcase for TradeNerva. The implementation lives in a private internal repository, and source-code access can be shared selectively for review.

## Local Static Preview

This repo also includes a static `index.html` version of the showcase page.

```bash
open index.html
```

## Test

```bash
node tests/homepage.test.mjs
```
