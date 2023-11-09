It is the function for create payment method

#### Use

Example onPaymentIntentCreateProps

```ts
const data: onPaymentIntentCreateProps = {
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",

    customer_code: "TestCustomerCode123q4562",
    card: {
        name: "asdf2",
        number: "4030000010001234",
        expiry_month: "02",
        expiry_year: "24",
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
const result: onPaymentIntentCreateResult | ErrorFenextjs =
    await wl.onPaymentIntentCreate(data);
```

Example onPaymentIntentCreateResult

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
