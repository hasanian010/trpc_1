import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutSellerInput } from './review-create-without-seller.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutSellerInput } from './review-create-or-connect-without-seller.input';
import { ReviewUpsertWithWhereUniqueWithoutSellerInput } from './review-upsert-with-where-unique-without-seller.input';
import { ReviewCreateManySellerInputEnvelope } from './review-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutSellerInput } from './review-update-with-where-unique-without-seller.input';
import { ReviewUpdateManyWithWhereWithoutSellerInput } from './review-update-many-with-where-without-seller.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutSellerNestedInput {

    @Field(() => [ReviewCreateWithoutSellerInput], {nullable:true})
    @Type(() => ReviewCreateWithoutSellerInput)
    create?: Array<ReviewCreateWithoutSellerInput>;

    @Field(() => [ReviewCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutSellerInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutSellerInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutSellerInput>;

    @Field(() => ReviewCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManySellerInputEnvelope)
    createMany?: ReviewCreateManySellerInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutSellerInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutSellerInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutSellerInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutSellerInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutSellerInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
