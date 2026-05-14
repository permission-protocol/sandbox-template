# Billing API

The Billing API is a fictional service used to demonstrate Permission Protocol policy behavior.

## Authentication

Requests use bearer tokens issued by the application backend:

```http
Authorization: Bearer demo_token
```

Tokens in this sandbox are placeholders. Do not put real credentials in example pull requests.

## Endpoints

### `POST /invoices`

Creates an invoice for a customer.

```json
{
  "customerId": "cus_demo",
  "region": "CO",
  "lines": [
    {
      "description": "Platform subscription",
      "quantity": 1,
      "unitPriceCents": 4900
    }
  ]
}
```

### `POST /refunds`

Creates a refund request for an existing payment. Refund logic is treated as consequential, so code changes under `src/api/billing.ts` require a signer.
