import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutSellerInput } from './review-create-without-seller.input';

@InputType()
export class ReviewCreateOrConnectWithoutSellerInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutSellerInput, {nullable:false})
    @Type(() => ReviewCreateWithoutSellerInput)
    create!: ReviewCreateWithoutSellerInput;
}
