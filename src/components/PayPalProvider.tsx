// PayPalProvider.tsx
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;

// Validate that we have a proper PayPal client ID
if (!PAYPAL_CLIENT_ID || PAYPAL_CLIENT_ID === "YOUR_PAYPAL_CLIENT_ID") {
  console.error('PayPal Client ID is not configured. Please set VITE_PAYPAL_CLIENT_ID in your environment variables.');
}

// Detect if we're using sandbox or live client ID
const isSandboxClient = PAYPAL_CLIENT_ID && (
  PAYPAL_CLIENT_ID.startsWith('Ae') || 
  PAYPAL_CLIENT_ID.startsWith('Ab') ||
  PAYPAL_CLIENT_ID.includes('sandbox')
);

if (isSandboxClient) {
  console.warn('⚠️ WARNING: Using PayPal Sandbox Client ID. For production, use a Live Client ID.');
}

const initialOptions = {
  clientId: PAYPAL_CLIENT_ID || "",
  currency: "USD",
  intent: "capture",
  // Force production environment - this ensures live PayPal is used
  "data-sdk-integration-source": "button-factory",
  // Only enable card, and explicitly disable Venmo and PayPal Credit
  "enable-funding": "card",
  "disable-funding": "venmo,credit",
  // The data-client-token is preferred when 3D Secure is enabled
  // "data-client-token": "YOUR_CLIENT_TOKEN", 
};

interface PayPalProviderProps {
  children: React.ReactNode;
}

const PayPalProvider: React.FC<PayPalProviderProps> = ({ children }) => {
  // Don't render PayPal provider if client ID is not configured
  if (!PAYPAL_CLIENT_ID || PAYPAL_CLIENT_ID === "YOUR_PAYPAL_CLIENT_ID") {
    console.warn('PayPal integration disabled due to missing client ID');
    return <>{children}</>;
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalProvider;