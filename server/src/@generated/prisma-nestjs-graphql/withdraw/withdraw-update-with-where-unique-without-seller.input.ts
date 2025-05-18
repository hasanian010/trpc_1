import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { WithdrawUpdateWithoutSellerInput } from './withdraw-update-without-seller.input';

@InputType()
export class WithdrawUpdateWithWhereUniqueWithoutSellerInput {

    @Field(() => WithdrawWhereUniqueInput, {nullable:false})
    @Type(() => WithdrawWhereUniqueInput)
    where!: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;

    @Field(() => WithdrawUpdateWithoutSellerInput, {nullable:false})
    @Type(() => WithdrawUpdateWithoutSellerInput)
    data!: WithdrawUpdateWithoutSellerInput;
}
