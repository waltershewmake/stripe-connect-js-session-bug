# Stripe Connect Session Bug Reproduction

This repository represents a minimal reproduction of a bug I've encountered with the Stripe Connect JS SDK collection. Once the onboarding component loads, it prompts the user to "Add Information." This is normal and expected. However, after clicking the button and signing in, a red "Your session has expired. Please log in again to continue" error message appears. Looking at the network logs reveals the following response across three different requests:

```json
{
    "error": {
        "message": "Invalid API Key provided: em_test_*********************************************************************************************loaAo5",
        "type": "invalid_request_error"
    }
}
```

[![Screenshot](/screenshot.png)](/screenshot.png)