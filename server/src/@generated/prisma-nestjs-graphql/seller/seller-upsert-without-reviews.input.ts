import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerUpdateWithoutReviewsInput } from './seller-update-without-reviews.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutReviewsInput } from './seller-create-without-reviews.input';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerUpsertWithoutReviewsInput {

    @Field(() => SellerUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => SellerUpdateWithoutReviewsInput)
    update!: SellerUpdateWithoutReviewsInput;

    @Field(() => SellerCreateWithoutReviewsInput, {nullable:false})
    @Type(() => SellerCreateWithoutReviewsInput)
    create!: SellerCreateWithoutReviewsInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;
}
