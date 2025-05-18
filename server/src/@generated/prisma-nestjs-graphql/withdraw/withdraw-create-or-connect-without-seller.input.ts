import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawCreateWithoutSellerInput } from './withdraw-create-without-seller.input';

@InputType()
export class WithdrawCreateOrConnectWithoutSellerInput {

    @Field(() => WithdrawWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;

    @Field(() => WithdrawCreateWithoutSellerInput, {nullable:false})
    @Type(() => WithdrawCreateWithoutSellerInput)
    create!: WithdrawCreateWithoutSellerInput;
}
