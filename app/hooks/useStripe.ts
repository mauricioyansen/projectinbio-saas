import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export function useStripe() {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    async function loadStripeAsync() {
      const stripeInstance = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      );

      setStripe(stripeInstance);
    }
    loadStripeAsync();
  }, []);

  async function createStripeCheckout({
    metadata,
    isSubscription,
  }: {
    metadata: any;
    isSubscription: boolean;
  }) {
    try {
      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ metadata, isSubscription }),
      });

      const data = await res.json();

      await stripe?.redirectToCheckout({
        sessionId: data.sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { createStripeCheckout };
}
