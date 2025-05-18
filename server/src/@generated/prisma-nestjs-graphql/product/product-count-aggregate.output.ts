import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    sellerId!: number;

    @Field(() => Int, {nullable:false})
    mainCategoryId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    brandId!: number;

    @Field(() => Int, {nullable:false})
    unit!: number;

    @Field(() => Int, {nullable:false})
    minPurchase!: number;

    @Field(() => Int, {nullable:false})
    refundAble!: number;

    @Field(() => Int, {nullable:false})
    images!: number;

    @Field(() => Int, {nullable:false})
    youtubeLink!: number;

    @Field(() => Int, {nullable:false})
    flashId!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    discount!: number;

    @Field(() => Int, {nullable:false})
    discountUnit!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    visibility!: number;

    @Field(() => Int, {nullable:false})
    isApproved!: number;

    @Field(() => Int, {nullable:false})
    estimateDelivery!: number;

    @Field(() => Int, {nullable:false})
    warranty!: number;

    @Field(() => Int, {nullable:false})
    showStock!: number;

    @Field(() => Int, {nullable:false})
    tax!: number;

    @Field(() => Int, {nullable:false})
    taxUnit!: number;

    @Field(() => Int, {nullable:false})
    totalPrice!: number;

    @Field(() => Int, {nullable:false})
    disclaimer!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
