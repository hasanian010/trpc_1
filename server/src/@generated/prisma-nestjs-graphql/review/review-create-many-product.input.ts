import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateimageInput } from './review-createimage.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class ReviewCreateManyProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

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
}
