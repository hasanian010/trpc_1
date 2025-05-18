import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawCreateWithoutSellerInput } from './withdraw-create-without-seller.input';
import { Type } from 'class-transformer';
import { WithdrawCreateOrConnectWithoutSellerInput } from './withdraw-create-or-connect-without-seller.input';
import { WithdrawCreateManySellerInputEnvelope } from './withdraw-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';

@InputType()
export class WithdrawUncheckedCreateNestedManyWithoutSellerInput {

    @Field(() => [WithdrawCreateWithoutSellerInput], {nullable:true})
    @Type(() => WithdrawCreateWithoutSellerInput)
    create?: Array<WithdrawCreateWithoutSellerInput>;

    @Field(() => [WithdrawCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => WithdrawCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<WithdrawCreateOrConnectWithoutSellerInput>;

    @Field(() => WithdrawCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => WithdrawCreateManySellerInputEnvelope)
    createMany?: WithdrawCreateManySellerInputEnvelope;

    @Field(() => [WithdrawWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>>;
}
