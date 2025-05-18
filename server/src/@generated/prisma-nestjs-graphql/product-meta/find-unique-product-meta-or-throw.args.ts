import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProductMetaOrThrowArgs {

    @Field(() => ProductMetaWhereUniqueInput, {nullable:false})
    @Type(() => ProductMetaWhereUniqueInput)
    where!: Prisma.AtLeast<ProductMetaWhereUniqueInput, 'id' | 'productId'>;
}
