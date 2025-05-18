import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesCreateWithoutProductAttributeInput } from './product-attribute-values-create-without-product-attribute.input';

@InputType()
export class ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput {

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeValuesCreateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductAttributeValuesCreateWithoutProductAttributeInput)
    create!: ProductAttributeValuesCreateWithoutProductAttributeInput;
}
