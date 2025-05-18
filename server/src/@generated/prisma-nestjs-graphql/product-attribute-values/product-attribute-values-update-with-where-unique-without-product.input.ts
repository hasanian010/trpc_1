import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesUpdateWithoutProductInput } from './product-attribute-values-update-without-product.input';

@InputType()
export class ProductAttributeValuesUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeValuesUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateWithoutProductInput)
    data!: ProductAttributeValuesUpdateWithoutProductInput;
}
