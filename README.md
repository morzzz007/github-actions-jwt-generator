# GitHub Action JWT generator

Do you want to send an HTTP request using HTTPie or CURL with a signed JWT token and wondering how you can create the token for a given token and secret? Well, look no further!

## Installation
```yaml
- name: JWT Generator
  uses: morzzz007/github-actions-jwt-generator@1.0.0
```

## Usage

The required inputs are `secret` and `payload`. It is recommended to store the secret as an encrypted [environment variable.](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables)

The output where the generated token is in `token`. To use it in a next step use `${{steps.<step_id>.outputs.token}}`. The token is generated with default HMAC SHA256 algorithm.

### Example usage
```yaml
on: [push]

jobs:
  send:
    name: Send new verison
    runs-on: ubuntu-latest
    steps:
      - name: JWT Generator
        id: jwtGenerator
        uses: morzzz007/github-actions-jwt-generator@1.0.0
        with:
          secret: topsecret
          payload: '{"hello":"world"}'
      - name: DUMP Token
        run: echo ${{steps.jwtGenerator.outputs.token}}

```
