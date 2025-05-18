import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutSellerInput } from './refundable-create-without-seller.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutSellerInput } from './refundable-create-or-connect-without-seller.input';
import { RefundableUpsertWithWhereUniqueWithoutSellerInput } from './refundable-upsert-with-where-unique-without-seller.input';
import { RefundableCreateManySellerInputEnvelope } from './refundable-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { RefundableUpdateWithWhereUniqueWithoutSellerInput } from './refundable-update-with-where-unique-without-seller.input';
import { RefundableUpdateManyWithWhereWithoutSellerInput } from './refundable-update-many-with-where-without-seller.input';
import { RefundableScalarWhereInput } from './refundable-scalar-where.input';

@InputType()
export class RefundableUpdateManyWithoutSellerNestedInput {

    @Field(() => [RefundableCreateWithoutSellerInput], {nullable:true})
    @Type(() => RefundableCreateWithoutSellerInput)
    create?: Array<RefundableCreateWithoutSellerInput>;

    @Field(() => [RefundableCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutSellerInput>;

    @Field(() => [RefundableUpsertWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => RefundableUpsertWithWhereUniqueWithoutSellerInput)
    upsert?: Array<RefundableUpsertWithWhereUniqueWithoutSellerInput>;

    @Field(() => RefundableCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => RefundableCreateManySellerInputEnvelope)
    createMany?: RefundableCreateManySellerInputEnvelope;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;

    @Field(() => [RefundableUpdateWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => RefundableUpdateWithWhereUniqueWithoutSellerInput)
    update?: Array<RefundableUpdateWithWhereUniqueWithoutSellerInput>;

    @Field(() => [RefundableUpdateManyWithWhereWithoutSellerInput], {nullable:true})
    @Type(() => RefundableUpdateManyWithWhereWithoutSellerInput)
    updateMany?: Array<RefundableUpdateManyWithWhereWithoutSellerInput>;

    @Field(() => [RefundableScalarWhereInput], {nullable:true})
    @Type(() => RefundableScalarWhereInput)
    deleteMany?: Array<RefundableScalarWhereInput>;
}
