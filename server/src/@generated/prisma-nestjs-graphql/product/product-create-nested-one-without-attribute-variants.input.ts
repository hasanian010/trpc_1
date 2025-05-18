import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAttributeVariantsInput } from './product-create-without-attribute-variants.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutAttributeVariantsInput } from './product-create-or-connect-without-attribute-variants.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutAttributeVariantsInput {

    @Field(() => ProductCreateWithoutAttributeVariantsInput, {nullable:true})
    @Type(() => ProductCreateWithoutAttributeVariantsInput)
    create?: ProductCreateWithoutAttributeVariantsInput;

    @Field(() => ProductCreateOrConnectWithoutAttributeVariantsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAttributeVariantsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeVariantsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
