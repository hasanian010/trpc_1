import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutSellerInput } from './refundable-update-without-seller.input';
import { RefundableCreateWithoutSellerInput } from './refundable-create-without-seller.input';

@InputType()
export class RefundableUpsertWithWhereUniqueWithoutSellerInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateWithoutSellerInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutSellerInput)
    update!: RefundableUpdateWithoutSellerInput;

    @Field(() => RefundableCreateWithoutSellerInput, {nullable:false})
    @Type(() => RefundableCreateWithoutSellerInput)
    create!: RefundableCreateWithoutSellerInput;
}
