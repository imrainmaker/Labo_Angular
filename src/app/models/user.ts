export interface User {
    id: number;
    email: string;
    pseudo: string;
    lastname?: string;
    firstname?: string;
    phone?: string;
    role: string;
}