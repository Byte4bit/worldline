interface User {
    id: string;
    name: string;
    email: string;
    account_id: string;
    role: string;
    last_login_at: string;
    last_request_at: string;
    email_settings: EmailSettings;
    updated_at: string;
    created_at: string;
    account_roles: AccountRole[];
}

interface EmailSettings {
    disputes: any;
}

interface AccountRole {
    account_id: string;
    role: string;
}

export interface onLoginResult {
    user: User;
    token: string;
    refresh_token: string;
}
