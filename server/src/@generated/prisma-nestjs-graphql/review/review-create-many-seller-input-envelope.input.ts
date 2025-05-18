import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManySellerInput } from './review-create-many-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManySellerInputEnvelope {

    @Field(() => [ReviewCreateManySellerInput], {nullable:false})
    @Type(() => ReviewCreateManySellerInput)
    data!: Array<ReviewCreateManySellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
