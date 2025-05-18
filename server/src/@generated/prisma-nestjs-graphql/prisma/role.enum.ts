import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    COWORKER = "COWORKER",
    MODERATOR = "MODERATOR",
    DELIVERY = "DELIVERY",
    SELLER = "SELLER"
}


registerEnumType(Role, { name: 'Role', description: undefined })
