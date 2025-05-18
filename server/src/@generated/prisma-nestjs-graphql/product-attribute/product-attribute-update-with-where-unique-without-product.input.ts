import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeUpdateWithoutProductInput } from './product-attribute-update-without-product.input';

@InputType()
export class ProductAttributeUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductAttributeUpdateWithoutProductInput)
    data!: ProductAttributeUpdateWithoutProductInput;
}
