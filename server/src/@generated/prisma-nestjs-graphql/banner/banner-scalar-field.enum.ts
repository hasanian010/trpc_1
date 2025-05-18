import { registerEnumType } from '@nestjs/graphql';

export enum BannerScalarFieldEnum {
    id = "id",
    name = "name",
    url = "url",
    path = "path",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BannerScalarFieldEnum, { name: 'BannerScalarFieldEnum', description: undefined })
