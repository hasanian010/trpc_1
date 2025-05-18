import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantUpdateWithoutProductAttributeInput } from './product-attribute-variant-update-without-product-attribute.input';

@InputType()
export class ProductAttributeVariantUpdateWithWhereUniqueWithoutProductAttributeInput {

    @Field(() => ProductAttributeVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeVariantUpdateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductAttributeVariantUpdateWithoutProductAttributeInput)
    data!: ProductAttributeVariantUpdateWithoutProductAttributeInput;
}
