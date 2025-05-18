import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutAttributeValuesInput } from './product-create-without-attribute-values.input';

@InputType()
export class ProductCreateOrConnectWithoutAttributeValuesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductCreateWithoutAttributeValuesInput)
    create!: ProductCreateWithoutAttributeValuesInput;
}
