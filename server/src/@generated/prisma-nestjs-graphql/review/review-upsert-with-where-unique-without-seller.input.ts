import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutSellerInput } from './review-update-without-seller.input';
import { ReviewCreateWithoutSellerInput } from './review-create-without-seller.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutSellerInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutSellerInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutSellerInput)
    update!: ReviewUpdateWithoutSellerInput;

    @Field(() => ReviewCreateWithoutSellerInput, {nullable:false})
    @Type(() => ReviewCreateWithoutSellerInput)
    create!: ReviewCreateWithoutSellerInput;
}
