import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutReviewsInput } from './seller-update-without-reviews.input';

@InputType()
export class SellerUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => SellerUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => SellerUpdateWithoutReviewsInput)
    data!: SellerUpdateWithoutReviewsInput;
}
