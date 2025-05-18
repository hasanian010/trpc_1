import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';
import { Type } from 'class-transformer';
import { ProductMetaCreateInput } from './product-meta-create.input';
import { ProductMetaUpdateInput } from './product-meta-update.input';

@ArgsType()
export class UpsertOneProductMetaArgs {

    @Field(() => ProductMetaWhereUniqueInput, {nullable:false})
    @Type(() => ProductMetaWhereUniqueInput)
    where!: Prisma.AtLeast<ProductMetaWhereUniqueInput, 'id' | 'productId'>;

    @Field(() => ProductMetaCreateInput, {nullable:false})
    @Type(() => ProductMetaCreateInput)
    create!: ProductMetaCreateInput;

    @Field(() => ProductMetaUpdateInput, {nullable:false})
    @Type(() => ProductMetaUpdateInput)
    update!: ProductMetaUpdateInput;
}
