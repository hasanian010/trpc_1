import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutRefundablesInput } from './product-create-without-refundables.input';

@InputType()
export class ProductCreateOrConnectWithoutRefundablesInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => ProductCreateWithoutRefundablesInput)
    create!: ProductCreateWithoutRefundablesInput;
}
