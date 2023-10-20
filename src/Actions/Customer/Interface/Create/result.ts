interface Metadata {
    [id: string]: any;
}

export interface onCreateResult {
    account_id: string;
    created_at: string;
    id: string;
    updated_at: string;
    email: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    phone: string;
    metadata: Metadata;
}
