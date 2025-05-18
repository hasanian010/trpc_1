import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutRefundablesInput } from './product-create-without-refundables.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutRefundablesInput } from './product-create-or-connect-without-refundables.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutRefundablesInput {

    @Field(() => ProductCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => ProductCreateWithoutRefundablesInput)
    create?: ProductCreateWithoutRefundablesInput;

    @Field(() => ProductCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutRefundablesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
