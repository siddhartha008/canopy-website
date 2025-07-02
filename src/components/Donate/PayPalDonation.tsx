import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

interface PayPalDonationProps {
  amount: number;
  isMonthly: boolean;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

const PayPalDonation: React.FC<PayPalDonationProps> = ({
  amount,
  isMonthly,
  onSuccess,
  onError,
}) => {
  const [{ isPending }] = usePayPalScriptReducer();

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
        <span className="ml-2 text-gray-600">Loading PayPal...</span>
      </div>
    );
  }

  // Handle one-time donations
  const createOneTimeOrder = (data: any, actions: any) => {
    console.log("Creating one-time PayPal order for amount:", amount);
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount.toString(),
          },
          description: `One-time donation to Canopy Nepal - $${amount}`,
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING',
        user_action: 'PAY_NOW',
        return_url: window.location.origin + '/donate?success=true',
        cancel_url: window.location.origin + '/donate?cancelled=true'
      }
    });
  };

  // Handle subscription creation
  const createSubscription = (data: any, actions: any) => {
    console.log("Creating PayPal subscription for amount:", amount);
    return actions.subscription.create({
      plan_id: getPlanIdForAmount(amount), // You'll need to create these plan IDs in PayPal dashboard
      application_context: {
        shipping_preference: 'NO_SHIPPING',
        user_action: 'SUBSCRIBE_NOW',
        return_url: window.location.origin + '/donate?success=true',
        cancel_url: window.location.origin + '/donate?cancelled=true'
      }
    });
  };

  // This function would map your donation amounts to subscription plan IDs
  // You need to create these plans in the PayPal Developer Dashboard first
  const getPlanIdForAmount = (amount: number): string => {
    // Replace these with your actual plan IDs from PayPal dashboard
    const planMap: {[key: number]: string} = {
      25: 'P-12345678901234567ABCDEFG', // Example plan ID for $25/month
      50: 'P-98765432109876543HIJKLMN', // Example plan ID for $50/month
      100: 'P-ABCDEFGHIJKLMNOPQ123456', // Example plan ID for $100/month
      250: 'P-RSTUVWXYZ1234567890ABCD', // Example plan ID for $250/month
      500: 'P-EFGHIJKLMNOPQRST1234567', // Example plan ID for $500/month
      1000: 'P-UVWXYZ1234567ABCDEFGHI', // Example plan ID for $1000/month
    };
    
    // Return the corresponding plan ID or a default one
    return planMap[amount] || planMap[25]; // Default to $25 plan if no match
  };

  // Handle one-time payment approval
  const handleOneTimeApproval = async (data: any, actions: any) => {
    console.log("One-time order approved:", data);
    try {
      const details = await actions.order.capture();
      console.log("Payment captured successfully:", details);
      if (onSuccess) {
        onSuccess(details);
      }
    } catch (error) {
      console.error("Error capturing payment:", error);
      if (onError) {
        onError(error);
      }
    }
  };

  // Handle subscription approval
  const handleSubscriptionApproval = async (data: any) => {
    console.log("Subscription approved:", data);
    // For subscriptions, we get different data than one-time payments
    try {
      // data.subscriptionID contains the subscription ID
      console.log("Subscription created successfully with ID:", data.subscriptionID);
      
      // We don't need to capture anything for subscriptions
      if (onSuccess) {
        onSuccess({
          id: data.subscriptionID,
          status: 'SUBSCRIPTION_CREATED',
          type: 'subscription',
          amount: amount,
          frequency: 'monthly'
        });
      }
    } catch (error) {
      console.error("Error processing subscription:", error);
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <PayPalButtons
      style={{ 
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "pay"
      }}
      // Venmo is now disabled via PayPalProvider
      // Use different handlers based on whether it's monthly or one-time
      createOrder={isMonthly ? undefined : createOneTimeOrder}
      createSubscription={isMonthly ? createSubscription : undefined}
      onApprove={isMonthly 
        ? handleSubscriptionApproval
        : handleOneTimeApproval
      }
      onCancel={() => {
        console.log("Payment was cancelled by user");
        if (onError) {
          onError(new Error("Payment was cancelled."));
        }
      }}
      onError={(err) => {
        console.error("PayPal error:", err);
        if (onError) {
          onError(err);
        }
      }}
    />
  );
};

export default PayPalDonation;