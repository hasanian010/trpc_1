import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProductAttributeValuesOrThrowArgs {

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;
}
