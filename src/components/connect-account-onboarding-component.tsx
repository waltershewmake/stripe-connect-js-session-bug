"use client";

import { loadConnectAndInitialize } from "@stripe/connect-js";
import { ConnectComponentsProvider, ConnectAccountOnboarding } from "@stripe/react-connect-js";
import { env } from "~/env";

const ConnectAccountOnboardingComponent: React.FC<{ client_secret: string }> = ({ client_secret }) => {
    const connectInstance = loadConnectAndInitialize({
        publishableKey: env.NEXT_PUBLIC_STRIPE_API_KEY,
        fetchClientSecret: async () => client_secret,
        appearance: {
            variables: {
                colorPrimary: '#228403', //optional appearance param,
            },
        },
    });


    return (
        <ConnectComponentsProvider connectInstance={connectInstance}>
            <ConnectAccountOnboarding onExit={() => console.log('exit')} />
        </ConnectComponentsProvider>
    )
}

export default ConnectAccountOnboardingComponent;