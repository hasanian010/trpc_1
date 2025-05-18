import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantUpdateWithoutProductInput } from './product-attribute-variant-update-without-product.input';
import { ProductAttributeVariantCreateWithoutProductInput } from './product-attribute-variant-create-without-product.input';

@InputType()
export class ProductAttributeVariantUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductAttributeVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeVariantUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductAttributeVariantUpdateWithoutProductInput)
    update!: ProductAttributeVariantUpdateWithoutProductInput;

    @Field(() => ProductAttributeVariantCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductAttributeVariantCreateWithoutProductInput)
    create!: ProductAttributeVariantCreateWithoutProductInput;
}
