import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutSelectedVariantsInput } from './product-attribute-create-without-selected-variants.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutSelectedVariantsInput } from './product-attribute-create-or-connect-without-selected-variants.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';

@InputType()
export class ProductAttributeCreateNestedOneWithoutSelectedVariantsInput {

    @Field(() => ProductAttributeCreateWithoutSelectedVariantsInput, {nullable:true})
    @Type(() => ProductAttributeCreateWithoutSelectedVariantsInput)
    create?: ProductAttributeCreateWithoutSelectedVariantsInput;

    @Field(() => ProductAttributeCreateOrConnectWithoutSelectedVariantsInput, {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutSelectedVariantsInput)
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutSelectedVariantsInput;

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;
}
