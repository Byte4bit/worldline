export interface onCreateProps {
    customer_code: string
    card: {
      name: string
      number: string
      expiry_month: string
      expiry_year: string
      cvd: string
    }
    billing: {
      name: string
      address_line1: string
      address_line2: string
      city: string
      email_address: string
      province: string
      country: string
      postal_code: string
    }
}
