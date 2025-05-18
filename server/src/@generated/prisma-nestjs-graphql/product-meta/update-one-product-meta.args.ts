import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductMetaUpdateInput } from './product-meta-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';

@ArgsType()
export class UpdateOneProductMetaArgs {

    @Field(() => ProductMetaUpdateInput, {nullable:false})
    @Type(() => ProductMetaUpdateInput)
    data!: ProductMetaUpdateInput;

    @Field(() => ProductMetaWhereUniqueInput, {nullable:false})
    @Type(() => ProductMetaWhereUniqueInput)
    where!: Prisma.AtLeast<ProductMetaWhereUniqueInput, 'id' | 'productId'>;
}
