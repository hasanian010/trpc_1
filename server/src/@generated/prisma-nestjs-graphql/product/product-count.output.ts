import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCount {

    @Field(() => Int, {nullable:false})
    subCategories?: number;

    @Field(() => Int, {nullable:false})
    tags?: number;

    @Field(() => Int, {nullable:false})
    attributeValues?: number;

    @Field(() => Int, {nullable:false})
    attributeVariants?: number;

    @Field(() => Int, {nullable:false})
    productAttribute?: number;

    @Field(() => Int, {nullable:false})
    specifications?: number;

    @Field(() => Int, {nullable:false})
    orderProducts?: number;

    @Field(() => Int, {nullable:false})
    refundables?: number;

    @Field(() => Int, {nullable:false})
    wishlists?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    sectionProducts?: number;
}
