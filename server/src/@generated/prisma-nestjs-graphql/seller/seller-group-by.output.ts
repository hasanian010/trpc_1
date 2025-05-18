import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { SellerCountAggregate } from './seller-count-aggregate.output';
import { SellerAvgAggregate } from './seller-avg-aggregate.output';
import { SellerSumAggregate } from './seller-sum-aggregate.output';
import { SellerMinAggregate } from './seller-min-aggregate.output';
import { SellerMaxAggregate } from './seller-max-aggregate.output';

@ObjectType()
export class SellerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    shopName!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    logo!: string;

    @Field(() => String, {nullable:false})
    banner!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    metaTitle?: string;

    @Field(() => String, {nullable:true})
    metaDescription?: string;

    @Field(() => Boolean, {nullable:false})
    isVerified!: boolean;

    @Field(() => Boolean, {nullable:false})
    isBanned!: boolean;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Float, {nullable:false})
    totalReview!: number;

    @Field(() => Float, {nullable:false})
    totalRating!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SellerCountAggregate, {nullable:true})
    _count?: SellerCountAggregate;

    @Field(() => SellerAvgAggregate, {nullable:true})
    _avg?: SellerAvgAggregate;

    @Field(() => SellerSumAggregate, {nullable:true})
    _sum?: SellerSumAggregate;

    @Field(() => SellerMinAggregate, {nullable:true})
    _min?: SellerMinAggregate;

    @Field(() => SellerMaxAggregate, {nullable:true})
    _max?: SellerMaxAggregate;
}
