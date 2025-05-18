import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantCreateWithoutProductAttributeInput } from './product-attribute-variant-create-without-product-attribute.input';

@InputType()
export class ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput {

    @Field(() => ProductAttributeVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeVariantCreateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductAttributeVariantCreateWithoutProductAttributeInput)
    create!: ProductAttributeVariantCreateWithoutProductAttributeInput;
}
