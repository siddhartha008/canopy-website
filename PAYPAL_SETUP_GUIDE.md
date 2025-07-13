# PayPal Subscription Setup Guide

## Issue: Monthly PayPal Payments Not Working

The monthly payment option is not working because the PayPal subscription plans
have not been properly configured. This guide will help you set up the required
subscription plans.

## Current Problem

The code contains placeholder plan IDs that are not valid:

```typescript
const planMap: { [key: number]: string } = {
    25: "P-4PT524692G063664UNBWIADA", // $25/month plan
    50: "P-3SY00478F2584513HNBWH7JA", // $50/month plan
    100: "P-5AB1234567890123456789A", // $100/month plan - replace with actual ID
    250: "P-6CD2345678901234567890B", // $250/month plan - replace with actual ID
    500: "P-7EF3456789012345678901C", // $500/month plan - replace with actual ID
    1000: "P-8GH4567890123456789012D", // $1000/month plan - replace with actual ID
};
```

## Solution: Create PayPal Subscription Plans

### Step 1: Access PayPal Developer Dashboard

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Log in with your PayPal account
3. Navigate to **Products** > **Subscriptions**

### Step 2: Create Subscription Plans

For each donation amount ($25, $50, $100, $250, $500, $1000), create a
subscription plan:

#### Example for $25/month plan:

1. Click **Create Plan**
2. Fill in the details:
   - **Plan Name**: Canopy Nepal - $25 Monthly Donation
   - **Description**: Monthly donation of $25 to support Canopy Nepal students
   - **Type**: Fixed
   - **Billing Cycle**: Monthly
   - **Amount**: $25.00 USD
   - **Currency**: USD
   - **Status**: Active

3. Click **Create Plan**
4. Copy the generated **Plan ID** (starts with "P-")

### Step 3: Update the Code

Replace the placeholder plan IDs in `src/components/Donate/PayPalDonation.tsx`:

```typescript
const planMap: { [key: number]: string } = {
    25: "P-YOUR_ACTUAL_25_PLAN_ID", // Replace with actual $25/month plan ID
    50: "P-YOUR_ACTUAL_50_PLAN_ID", // Replace with actual $50/month plan ID
    100: "P-YOUR_ACTUAL_100_PLAN_ID", // Replace with actual $100/month plan ID
    250: "P-YOUR_ACTUAL_250_PLAN_ID", // Replace with actual $250/month plan ID
    500: "P-YOUR_ACTUAL_500_PLAN_ID", // Replace with actual $500/month plan ID
    1000: "P-YOUR_ACTUAL_1000_PLAN_ID", // Replace with actual $1000/month plan ID
};
```

### Step 4: Test the Implementation

1. Deploy the updated code
2. Test monthly donations with each amount
3. Verify that subscriptions are created successfully
4. Check PayPal dashboard to confirm subscriptions are active

## Alternative Solution: Dynamic Plan Creation

If you prefer not to create fixed plans, you can implement dynamic plan creation
using PayPal's API. This requires backend integration.

## Troubleshooting

### Common Issues:

1. **"Plan not found" error**: Ensure plan IDs are correct and plans are active
2. **"Invalid plan" error**: Check that plans are in the same environment
   (sandbox/live) as your client ID
3. **"Subscription creation failed"**: Verify plan configuration and permissions

### Testing:

- Use PayPal Sandbox for testing
- Test with different amounts
- Verify subscription creation in PayPal dashboard
- Check webhook notifications (if configured)

## Environment Variables

Ensure your `.env` file has the correct PayPal client ID:

```env
VITE_PAYPAL_CLIENT_ID=your_actual_paypal_client_id
```

## Support

If you continue to have issues:

1. Check PayPal Developer documentation
2. Verify plan configuration in PayPal dashboard
3. Test with PayPal's sample code
4. Contact PayPal developer support if needed

## Notes

- Subscription plans are environment-specific (sandbox vs live)
- Plans must be active to be used
- Plan IDs are unique and cannot be reused
- Consider implementing webhooks for subscription management
