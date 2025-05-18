import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutRefundablesInput } from './seller-create-without-refundables.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutRefundablesInput } from './seller-create-or-connect-without-refundables.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerCreateNestedOneWithoutRefundablesInput {

    @Field(() => SellerCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => SellerCreateWithoutRefundablesInput)
    create?: SellerCreateWithoutRefundablesInput;

    @Field(() => SellerCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: SellerCreateOrConnectWithoutRefundablesInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
