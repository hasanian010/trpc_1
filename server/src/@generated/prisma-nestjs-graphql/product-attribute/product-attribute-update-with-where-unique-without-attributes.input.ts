import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeUpdateWithoutAttributesInput } from './product-attribute-update-without-attributes.input';

@InputType()
export class ProductAttributeUpdateWithWhereUniqueWithoutAttributesInput {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeUpdateWithoutAttributesInput, {nullable:false})
    @Type(() => ProductAttributeUpdateWithoutAttributesInput)
    data!: ProductAttributeUpdateWithoutAttributesInput;
}
