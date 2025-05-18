import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutSellerInput } from './refundable-create-without-seller.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutSellerInput } from './refundable-create-or-connect-without-seller.input';
import { RefundableCreateManySellerInputEnvelope } from './refundable-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@InputType()
export class RefundableUncheckedCreateNestedManyWithoutSellerInput {

    @Field(() => [RefundableCreateWithoutSellerInput], {nullable:true})
    @Type(() => RefundableCreateWithoutSellerInput)
    create?: Array<RefundableCreateWithoutSellerInput>;

    @Field(() => [RefundableCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutSellerInput>;

    @Field(() => RefundableCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManySellerInputEnvelope)
    createMany?: RefundableCreateManySellerInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;
}
