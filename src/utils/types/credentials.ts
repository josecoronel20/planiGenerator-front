import { Planification } from "./planification";

export interface CredentialsGetMe {
    id: number;
    email: string;
    username: string;
    planification: Planification
}

export interface CredentialsLogin {
    email: string;
    password: string;
}

export interface CredentialsRegister {
    email: string;
    password: string;
    username: string;
}