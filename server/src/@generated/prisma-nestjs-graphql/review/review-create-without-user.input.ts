import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateimageInput } from './review-createimage.input';
import { Float } from '@nestjs/graphql';
import { SellerCreateNestedOneWithoutReviewsInput } from '../seller/seller-create-nested-one-without-reviews.input';
import { ProductCreateNestedOneWithoutReviewsInput } from '../product/product-create-nested-one-without-reviews.input';

@InputType()
export class ReviewCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ReviewCreateimageInput, {nullable:true})
    image?: ReviewCreateimageInput;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => String, {nullable:true})
    reply?: string;

    @Field(() => Float, {nullable:false})
    rating!: number;

    @Field(() => Boolean, {nullable:true})
    publish?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SellerCreateNestedOneWithoutReviewsInput, {nullable:true})
    seller?: SellerCreateNestedOneWithoutReviewsInput;

    @Field(() => ProductCreateNestedOneWithoutReviewsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutReviewsInput;
}
