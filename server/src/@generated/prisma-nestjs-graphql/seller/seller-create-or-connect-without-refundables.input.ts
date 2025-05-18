import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutRefundablesInput } from './seller-create-without-refundables.input';

@InputType()
export class SellerCreateOrConnectWithoutRefundablesInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => SellerCreateWithoutRefundablesInput)
    create!: SellerCreateWithoutRefundablesInput;
}
