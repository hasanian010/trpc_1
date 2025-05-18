import { registerEnumType } from '@nestjs/graphql';

export enum SectionProductScalarFieldEnum {
    id = "id",
    sectionId = "sectionId",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SectionProductScalarFieldEnum, { name: 'SectionProductScalarFieldEnum', description: undefined })
