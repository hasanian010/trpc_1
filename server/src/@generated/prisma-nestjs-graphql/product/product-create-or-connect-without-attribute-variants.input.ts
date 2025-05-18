import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutAttributeVariantsInput } from './product-create-without-attribute-variants.input';

@InputType()
export class ProductCreateOrConnectWithoutAttributeVariantsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutAttributeVariantsInput, {nullable:false})
    @Type(() => ProductCreateWithoutAttributeVariantsInput)
    create!: ProductCreateWithoutAttributeVariantsInput;
}
