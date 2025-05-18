import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateWithoutProductInput } from './product-attribute-create-without-product.input';

@InputType()
export class ProductAttributeCreateOrConnectWithoutProductInput {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductAttributeCreateWithoutProductInput)
    create!: ProductAttributeCreateWithoutProductInput;
}
