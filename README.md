# GraphQL Schemas

## Guidelines

### 1. Representing prices

- Prices are `Decimal` type
- We should avoid using `value`, there is no meaning for us
- Prefer give a name that represents it, e.g. `stockPrice`
- Use `price` for generic stuffs, because it is self explanatory

```
// Good
price: Decimal!

// Bad
price: {
  value: Decimal!
}

// Bad
value: Decimal!
```

In the front side that should be formatted:
- `1.5`: `$ 1.5`
- `32000000.00`: `$ 32B`

### 2. Representing percents

- Percents are `Decimal` type
- Prefer give a name that represents it, e.g. `marketCapDelta`
- Use `percent` for generic stuffs, because it is self explanatory

```
// Good
percent: Decimal!

// Bad
value: Decimal!
```

In the front side that should be formatted:
- `1.5`: `1.5%`
- `0.54`: `0.54%`

###  3. Representing currency

Should be in the root of the section. \
Can be repetitive, but don't worry.

For example:
```
InstrumentPage {
  Overview
  MarketCap
  ...
}

Overview {
  currency
  ...
}

MarketCap {
  currency
  ...
}
```

In this case, all content of the `Overview` should use currency defined in the root. \
If `Overview` have subsections, make sense to use same strategy.

### 4. Representing lists

Keep in mind that `List != Table`.

Let's take example of list from `Stockholder Returns` in `Intrument Page Oevrview`:
```
AAPL          ^ 1.92%
US Tech       ^ 1.92%
US Market     ^ 1.92%
```

Schemas:
```
// Good
type StockPerformance {
  ...
  items: [StockPerformanceItem!]!
}
type StockPerformanceItem {
  description: String!
  performanceDelta: Decimal!
}

// Bad
table [LabelValue!]!

// Bad
table: [[String]!]!
```

### 5. Representing enums

Enum values should be in uppercase.

For example:
```graphql
enum Recommendation {
  STRONG_BUY
  BUY
  NEUTRAL
  SELL
  STRONG_SELL
}
```
