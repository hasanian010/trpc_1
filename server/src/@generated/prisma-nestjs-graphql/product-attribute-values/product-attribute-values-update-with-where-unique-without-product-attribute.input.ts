import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesUpdateWithoutProductAttributeInput } from './product-attribute-values-update-without-product-attribute.input';

@InputType()
export class ProductAttributeValuesUpdateWithWhereUniqueWithoutProductAttributeInput {

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeValuesUpdateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateWithoutProductAttributeInput)
    data!: ProductAttributeValuesUpdateWithoutProductAttributeInput;
}
