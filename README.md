# Next.js GoogleBot Crypto Error Reproduction

This repository provides a minimal reproduction of a specific issue where GoogleBot requests trigger `DOMException [OperationError]` errors from Node's crypto module in a Next.js 14 application.

## The Issue

When GoogleBot crawls the application, random requests result in a `DOMException [OperationError]` from Node's crypto module, causing 500 status codes. This issue:

- **ONLY** occurs with GoogleBot requests
- Does NOT occur with any other crawlers (e.g., BingBot, YandexBot)
- Does NOT occur with any other user agents or ASNs
- Happens randomly across different pages
- Results in 500 status codes
- Occurs below application try-catch blocks
- Happens despite no explicit crypto operations in the codebase

## Error Stack

```
2025-01-29T08:30:27: DOMException [OperationError]: The operation failed for an operation-specific reason
    at AESCipherJob.onDone (node:internal/crypto/util:462:19)
    at AESCipherJob.callbackTrampoline (node:internal/async_hooks:130:17) {
  digest: '1379131148',
  [cause]: [Error: Cipher job failed]
}
```

## Prerequisites

- Node.js (issue persists across multiple versions)
- npm or yarn
- A domain accessible to GoogleBot

## Setup & Reproduction

1. Clone this repository:
```bash
git clone [repository-url]
cd nextjs-googlebot-repro
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

4. Start the production server:
```bash
npm start
```

5. Deploy to a production environment accessible to GoogleBot

6. Verify GoogleBot access:
   - Use Google Search Console to submit URLs for crawling
   - OR use the "Fetch as GoogleBot" feature
   - Monitor server logs for the crypto error
   - Verify that ONLY GoogleBot requests trigger the error

## Project Structure

```
nextjs-googlebot-repro/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic pages
│   ├── components/
│   │   ├── ui/
│   │   │   ├── page-container.tsx
│   │   │   └── alert.tsx
│   └── lib/
│       └── metadata.ts
```

## Key Implementation Details

The reproduction includes:
- Server Components with Suspense boundaries
- Dynamic metadata generation
- Data fetching patterns
- Error boundaries
- Dynamic routes

## Verifying the Issue

1. Deploy the application
2. Submit multiple URLs to Google Search Console
3. Monitor server logs for requests from GoogleBot
4. Observe that:
   - Only GoogleBot requests trigger the error
   - The error occurs randomly across different pages
   - Each error results in a 500 status code
   - No other crawlers or user agents trigger the error

## Additional Notes

- The error occurs at a level below application try-catch blocks
- Application error handling cannot catch these errors
- The issue appears to be related to Next.js's internal crypto operations

## Contributing

If you can provide additional insights or have found similar issues, please:
1. Create an issue in this repository
2. Provide your environment details
3. Share any additional error context
4. Describe your deployment environment