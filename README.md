# solana-blinks-actions

A minimal Solana Actions (blinks) demo: one Action endpoint that turns a URL into a signable transaction.

- **`web/app/api/actions/route.ts`:** `GET` returns the Action card ("Blinks/Actions Demo", button "Try it out"). `POST` builds a `SystemProgram.transfer`, serializes it and returns it for the user's wallet to sign.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000/api/actions` in [dial.to](https://dial.to) to see the blink.

Stack: Next.js 14, `@solana/actions`, `@solana/web3.js`. Scaffolded with create-solana-dapp.
