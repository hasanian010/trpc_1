import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutAttributesInput } from './product-attribute-create-without-attributes.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutAttributesInput } from './product-attribute-create-or-connect-without-attributes.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';

@InputType()
export class ProductAttributeCreateNestedManyWithoutAttributesInput {

    @Field(() => [ProductAttributeCreateWithoutAttributesInput], {nullable:true})
    @Type(() => ProductAttributeCreateWithoutAttributesInput)
    create?: Array<ProductAttributeCreateWithoutAttributesInput>;

    @Field(() => [ProductAttributeCreateOrConnectWithoutAttributesInput], {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutAttributesInput)
    connectOrCreate?: Array<ProductAttributeCreateOrConnectWithoutAttributesInput>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;
}
