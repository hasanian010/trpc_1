import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateWithoutAttributeValuesInput } from './product-attribute-create-without-attribute-values.input';

@InputType()
export class ProductAttributeCreateOrConnectWithoutAttributeValuesInput {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeCreateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductAttributeCreateWithoutAttributeValuesInput)
    create!: ProductAttributeCreateWithoutAttributeValuesInput;
}
