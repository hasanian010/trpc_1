import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutAttributeValuesInput } from './product-attribute-create-without-attribute-values.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutAttributeValuesInput } from './product-attribute-create-or-connect-without-attribute-values.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';

@InputType()
export class ProductAttributeCreateNestedOneWithoutAttributeValuesInput {

    @Field(() => ProductAttributeCreateWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductAttributeCreateWithoutAttributeValuesInput)
    create?: ProductAttributeCreateWithoutAttributeValuesInput;

    @Field(() => ProductAttributeCreateOrConnectWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutAttributeValuesInput)
    connectOrCreate?: ProductAttributeCreateOrConnectWithoutAttributeValuesInput;

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;
}
