import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutReviewsInput } from './seller-create-without-reviews.input';

@InputType()
export class SellerCreateOrConnectWithoutReviewsInput {

    @Field(() => SellerWhereUniqueInput, {nullable:false})
    @Type(() => SellerWhereUniqueInput)
    where!: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerCreateWithoutReviewsInput, {nullable:false})
    @Type(() => SellerCreateWithoutReviewsInput)
    create!: SellerCreateWithoutReviewsInput;
}
