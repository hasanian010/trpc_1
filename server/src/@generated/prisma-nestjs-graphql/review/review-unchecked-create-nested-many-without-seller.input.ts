import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutSellerInput } from './review-create-without-seller.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutSellerInput } from './review-create-or-connect-without-seller.input';
import { ReviewCreateManySellerInputEnvelope } from './review-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutSellerInput {

    @Field(() => [ReviewCreateWithoutSellerInput], {nullable:true})
    @Type(() => ReviewCreateWithoutSellerInput)
    create?: Array<ReviewCreateWithoutSellerInput>;

    @Field(() => [ReviewCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutSellerInput>;

    @Field(() => ReviewCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManySellerInputEnvelope)
    createMany?: ReviewCreateManySellerInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}
