# GraphQL Mock Server

## How it works

There are two main folders on the repository:
- `schemas`: where the GraphQL schemas are stored
- `mock-server`: The mock server code

When the mock server is running it will listen for changes in the `schemas` and the `mock-server/src` folders, and will reflect the changes without the need to restart.

## How to use it

### Docker (preferred way)

```bash
docker compose up
```

### Commands

| Docker | Description |
| --- | --- |
| `docker compose build` | Build the mock server image |
| `docker compose up` | Start the mock server |


## Running with nodejs locally

```bash
yarn install
yarn start
```

| Command | Description |
| --- | --- |
| `yarn install` | Install dependencies |
| `yarn start` | Start the mock server |
