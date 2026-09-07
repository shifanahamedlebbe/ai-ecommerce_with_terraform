import { Role } from '@prisma/client';
export declare class SignupDto {
    email: string;
    name: string;
    password: string;
    role: Role;
}
