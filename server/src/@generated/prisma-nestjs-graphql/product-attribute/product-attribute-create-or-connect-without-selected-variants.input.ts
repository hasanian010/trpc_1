import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateWithoutSelectedVariantsInput } from './product-attribute-create-without-selected-variants.input';

@InputType()
export class ProductAttributeCreateOrConnectWithoutSelectedVariantsInput {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeCreateWithoutSelectedVariantsInput, {nullable:false})
    @Type(() => ProductAttributeCreateWithoutSelectedVariantsInput)
    create!: ProductAttributeCreateWithoutSelectedVariantsInput;
}
