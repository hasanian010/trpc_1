import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateWithoutAttributesInput } from './product-attribute-create-without-attributes.input';

@InputType()
export class ProductAttributeCreateOrConnectWithoutAttributesInput {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeCreateWithoutAttributesInput, {nullable:false})
    @Type(() => ProductAttributeCreateWithoutAttributesInput)
    create!: ProductAttributeCreateWithoutAttributesInput;
}
