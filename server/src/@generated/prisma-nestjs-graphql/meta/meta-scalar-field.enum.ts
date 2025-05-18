import { registerEnumType } from '@nestjs/graphql';

export enum MetaScalarFieldEnum {
    itemCount = "itemCount",
    totalItems = "totalItems",
    itemsPerPage = "itemsPerPage",
    totalPages = "totalPages",
    currentPage = "currentPage"
}


registerEnumType(MetaScalarFieldEnum, { name: 'MetaScalarFieldEnum', description: undefined })
