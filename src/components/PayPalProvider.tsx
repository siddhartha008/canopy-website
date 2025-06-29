// PayPalProvider.tsx
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID",
  currency: "USD",
  intent: "capture",
  // The data-client-token is preferred when 3D Secure is enabled
  // "data-client-token": "YOUR_CLIENT_TOKEN", 
};

interface PayPalProviderProps {
  children: React.ReactNode;
}

const PayPalProvider: React.FC<PayPalProviderProps> = ({ children }) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalProvider;