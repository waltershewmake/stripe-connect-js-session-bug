
import styles from "./index.module.css";
import internalStripe from "stripe";
import { env } from "~/env";
import React from "react";
import ConnectAccountOnboardingComponent from "~/components/connect-account-onboarding-component";

const stripe = new internalStripe(env.STRIPE_API_KEY);

export default async function Home() {
  const accountSession = await stripe.accountSessions.create({
    account: env.STRIPE_CONNECTED_ACCOUNT_ID,
    components: {
      account_onboarding: {
        enabled: true,
      }
    }
  });


  return (
    <main className={styles.main}>
      <div className={styles.container}><ConnectAccountOnboardingComponent client_secret={accountSession.client_secret} /></div>
    </main>
  );
}

