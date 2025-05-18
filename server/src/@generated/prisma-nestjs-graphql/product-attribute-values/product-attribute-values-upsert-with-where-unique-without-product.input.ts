import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesUpdateWithoutProductInput } from './product-attribute-values-update-without-product.input';
import { ProductAttributeValuesCreateWithoutProductInput } from './product-attribute-values-create-without-product.input';

@InputType()
export class ProductAttributeValuesUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeValuesUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateWithoutProductInput)
    update!: ProductAttributeValuesUpdateWithoutProductInput;

    @Field(() => ProductAttributeValuesCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductAttributeValuesCreateWithoutProductInput)
    create!: ProductAttributeValuesCreateWithoutProductInput;
}
