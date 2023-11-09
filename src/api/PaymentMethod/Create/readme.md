It is the function for create agent in aveonline for xell

#### Use

Example onPaymentMethodCreateProps

```ts
const data: onPaymentMethodCreateProps = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uIjo1MDEyNjgyMSwiZXhwIjoxNjk4OTgyNjMyLCJhcHJvYmFkb3MiOlszMjY1OV19.eICy47QVZWbxYyHOR1msXYIqQyTg6iN2Hr_KXvsmMH0',
    companyId: 1,

    agentName: 'demo-xell',
    contact: 'demo-xell',
    phone: 0,
    email: 'demo-xell@yopmail.com',
    city: 'MEDELLIN(ANTIOQUIA)',
    address: 'string',
};
```

```ts
const result: onPaymentMethodCreateResult | ErrorFenextjs = await ave.agent.onPaymentMethodCreate(data);
```

Example onPaymentMethodCreateResult

```ts
{
  success: true,
  message: "PaymentMethode creado con éxito"
}
```

ErrorFenextjs

```ts
if (result instanceof ErrorFenextjs) {
    const { code, message, name, data, input, stack } = result;
}
```
