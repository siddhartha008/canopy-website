# Canopy Nepal

A React application for Canopy Nepal with newsletter subscription and PayPal
integration.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `env.example`:
   ```bash
   cp env.example .env
   ```

3. Fill in your environment variables in `.env`

4. Start development server:
   ```bash
   npm run dev
   ```

## Deployment

This project uses GitHub Actions to automatically deploy to GitHub Pages.

### Setting up GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following repository secrets:

   - `VITE_MAILCHIMP_URL`: Your Mailchimp form action URL
   - `VITE_MAILCHIMP_U`: Your Mailchimp unique account ID
   - `VITE_MAILCHIMP_ID`: Your Mailchimp audience/list ID
   - `VITE_PAYPAL_CLIENT_ID`: Your PayPal client ID

### How it works

- Environment variables are only available during the build process
- They are embedded into the built JavaScript files
- The `.env` file is gitignored and never pushed to GitHub
- GitHub Actions uses secrets to build the app securely
- The deployed app will have the environment variables baked in

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npm run deploy
```

## Environment Variables

| Variable                | Description                 |
| ----------------------- | --------------------------- |
| `VITE_MAILCHIMP_URL`    | Mailchimp form action URL   |
| `VITE_MAILCHIMP_U`      | Mailchimp unique account ID |
| `VITE_MAILCHIMP_ID`     | Mailchimp audience/list ID  |
| `VITE_PAYPAL_CLIENT_ID` | PayPal client ID            |

## Security Notes

- Never commit your `.env` file to version control
- Environment variables prefixed with `VITE_` are embedded in the client-side
  bundle
- For truly sensitive data, consider using a backend API
- The current setup is suitable for public API keys (PayPal client ID, Mailchimp
  form URLs)
