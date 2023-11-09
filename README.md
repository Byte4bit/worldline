# Worldline Payment

Lib for connect and worldline

<details><summary>onPaymentMethodCreate</summary>
It is the function for create payment method

#### Use

Example onPaymentMethodCreateProps

```ts
const data: onPaymentMethodCreateProps = {
    customer_code: "TestCustomerCode123451226",
    card: {
        name: "asdf2",
        number: "4030000010001234",
        expiry_month: 2,
        expiry_year: 24,
        cvd: "123",
    },
    billing: {
        name: "asdf2",
        address_line1: "2659 Douglas St",
        address_line2: "",
        city: "victoria",
        email_address: "asdf@asdf.com",
        province: "bc",
        country: "ca",
        postal_code: "V8T 4M3",
    },
};
```

```ts
const result: onPaymentMethodCreateResult | ErrorFenextjs =
    await wl.onPaymentMethodCreate(data);
```

Example onPaymentMethodCreateResult

```ts
{
    "code": 1,
    "message": "Operation Successful",
    "customer_code": "TestCustomerCode123q4562"
}
```

ErrorFenextjs

```ts
if (result instanceof ErrorFenextjs) {
    const { code, message, name, data, input, stack } = result;
}
```
</details>
<details><summary>onPaymentIntentCreate</summary>
It is the function for create payment intent

#### Use

Example onPaymentIntentCreateProps

```ts
const data: onPaymentIntentCreateProps = {

        amount:100,
        payment_method:'payment_profile',
        //if  payment_method == payment_profile
        payment_profile:{
            customer_code:"TestCustomerCode123451226",
        }
        //if  payment_method == card
        card:{
            name: "asdf2",
            number: "4030000010001234",
            expiry_month: 2,
            expiry_year: 24,
            cvd: "123",
        }
};
```

```ts
const result: onPaymentIntentCreateResult | ErrorFenextjs =
    await wl.onPaymentIntentCreate(data);
```

Example onPaymentIntentCreateResult

```ts
{
  "id": "10000002",
  "authorizing_merchant_id": 300213582,
  "approved": "1",
  "message_id": "1",
  "message": "Approved",
  "auth_code": "TEST",
  "created": "2023-11-09T12:35:27",
  "order_number": "10000002",
  "type": "P",
  "payment_method": "CC",
  "risk_score": 0,
  "amount": 100,
  "custom": { "ref1": "", "ref2": "", "ref3": "", "ref4": "", "ref5": "" },
  "card": {
    "card_type": "VI",
    "last_four": "1234",
    "card_bin": "403000",
    "address_match": 1,
    "postal_result": 1,
    "avs_result": "1",
    "cvd_result": "5",
    "avs": {
      "id": "Y",
      "message": "Street address and Postal/ZIP match.",
      "processed": true
    }
  },
  "links": [
    {
      "rel": "void",
      "href": "https://api.na.bambora.com/v1/payments/10000002/void",
      "method": "POST"
    },
    {
      "rel": "return",
      "href": "https://api.na.bambora.com/v1/payments/10000002/returns",
      "method": "POST"
    }
  ]
}

```

ErrorFenextjs

```ts
if (result instanceof ErrorFenextjs) {
    const { code, message, name, data, input, stack } = result;
}
```
</details>