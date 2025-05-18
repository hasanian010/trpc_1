import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesUpdateWithoutProductAttributeInput } from './product-attribute-values-update-without-product-attribute.input';
import { ProductAttributeValuesCreateWithoutProductAttributeInput } from './product-attribute-values-create-without-product-attribute.input';

@InputType()
export class ProductAttributeValuesUpsertWithWhereUniqueWithoutProductAttributeInput {

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeValuesUpdateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateWithoutProductAttributeInput)
    update!: ProductAttributeValuesUpdateWithoutProductAttributeInput;

    @Field(() => ProductAttributeValuesCreateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductAttributeValuesCreateWithoutProductAttributeInput)
    create!: ProductAttributeValuesCreateWithoutProductAttributeInput;
}
