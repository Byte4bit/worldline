export interface Metadata {
    [id: string]: any;
}

export interface onCreateProps {
    email: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    phone: string;
    metadata?: Metadata;
}
