import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAttributeValuesInput } from './product-create-without-attribute-values.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutAttributeValuesInput } from './product-create-or-connect-without-attribute-values.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutAttributeValuesInput {

    @Field(() => ProductCreateWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductCreateWithoutAttributeValuesInput)
    create?: ProductCreateWithoutAttributeValuesInput;

    @Field(() => ProductCreateOrConnectWithoutAttributeValuesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAttributeValuesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeValuesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
