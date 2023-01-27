import { Role } from './role';

export class Account {
    id: string | undefined;
    title: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    role: Role | undefined;
    jwtToken?: string;
    
}