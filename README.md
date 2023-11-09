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