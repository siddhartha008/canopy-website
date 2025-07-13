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

  // Handle subscription creation with improved error handling
  const createSubscription = (data: any, actions: any) => {
    console.log("Creating PayPal subscription for amount:", amount);
    
    try {
      const planId = getPlanIdForAmount(amount);
      console.log("Using plan ID:", planId);
      
      if (!planId) {
        throw new Error(`No subscription plan available for $${amount}/month. Please contact support or try a one-time donation.`);
      }
      
      return actions.subscription.create({
        plan_id: planId,
        application_context: {
          shipping_preference: 'NO_SHIPPING',
          user_action: 'SUBSCRIBE_NOW',
          return_url: window.location.origin + '/donate?success=true',
          cancel_url: window.location.origin + '/donate?cancelled=true'
        }
      });
    } catch (error) {
      console.error("Error creating subscription:", error);
      // If subscription creation fails, we can fall back to one-time payment
      if (onError) {
        onError({
          ...error,
          message: `Monthly subscription not available for $${amount}. Please try a one-time donation or contact support.`,
          fallbackToOnetime: true
        });
      }
      throw error;
    }
  };

  // This function maps donation amounts to subscription plan IDs
  // IMPORTANT: You need to create these plans in the PayPal Developer Dashboard
  const getPlanIdForAmount = (amount: number): string | null => {
    // Replace these with your actual plan IDs from PayPal dashboard
    // Each amount needs its own subscription plan created in PayPal
    const planMap: {[key: number]: string} = {
      25: 'P-4PT524692G063664UNBWIADA',  // $25/month plan
      50: 'P-3SY00478F2584513HNBWH7JA',  // $50/month plan
      100: 'P-5AB1234567890123456789A',  // $100/month plan - replace with actual ID
      250: 'P-6CD2345678901234567890B',  // $250/month plan - replace with actual ID
      500: 'P-7EF3456789012345678901C',  // $500/month plan - replace with actual ID
      1000: 'P-8GH4567890123456789012D', // $1000/month plan - replace with actual ID
    };
    
    const planId = planMap[amount];
    if (!planId) {
      console.error(`No plan ID found for amount: $${amount}`);
      return null;
    }
    
    // Check if the plan ID looks like a placeholder (contains generic patterns)
    if (planId.includes('123456789') || planId.includes('ABCDEFGH')) {
      console.warn(`Plan ID for $${amount} appears to be a placeholder. Please replace with actual PayPal plan ID.`);
      return null;
    }
    
    return planId;
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
    try {
      // data.subscriptionID contains the subscription ID
      console.log("Subscription created successfully with ID:", data.subscriptionID);
      
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

  // Check if monthly subscription is available for the current amount
  const isMonthlyAvailable = () => {
    const planId = getPlanIdForAmount(amount);
    return planId !== null;
  };

  // If monthly is selected but not available, show a message
  if (isMonthly && !isMonthlyAvailable()) {
    return (
      <div className="text-center p-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-yellow-800 text-sm">
            Monthly subscription for ${amount} is not currently available. 
            Please try a one-time donation or contact us for monthly giving options.
          </p>
        </div>
        <button
          onClick={() => {
            if (onError) {
              onError({
                message: `Monthly subscription not available for $${amount}. Please try a one-time donation.`,
                fallbackToOnetime: true
              });
            }
          }}
          className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-primary-cyan/80 transition-colors"
        >
          Try One-Time Donation
        </button>
      </div>
    );
  }

  return (
    <PayPalButtons
      style={{ 
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "pay"
      }}
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