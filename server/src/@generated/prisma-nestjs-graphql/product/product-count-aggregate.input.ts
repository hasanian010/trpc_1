import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    sellerId?: true;

    @Field(() => Boolean, {nullable:true})
    mainCategoryId?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    brandId?: true;

    @Field(() => Boolean, {nullable:true})
    unit?: true;

    @Field(() => Boolean, {nullable:true})
    minPurchase?: true;

    @Field(() => Boolean, {nullable:true})
    refundAble?: true;

    @Field(() => Boolean, {nullable:true})
    images?: true;

    @Field(() => Boolean, {nullable:true})
    youtubeLink?: true;

    @Field(() => Boolean, {nullable:true})
    flashId?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    discount?: true;

    @Field(() => Boolean, {nullable:true})
    discountUnit?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    visibility?: true;

    @Field(() => Boolean, {nullable:true})
    isApproved?: true;

    @Field(() => Boolean, {nullable:true})
    estimateDelivery?: true;

    @Field(() => Boolean, {nullable:true})
    warranty?: true;

    @Field(() => Boolean, {nullable:true})
    showStock?: true;

    @Field(() => Boolean, {nullable:true})
    tax?: true;

    @Field(() => Boolean, {nullable:true})
    taxUnit?: true;

    @Field(() => Boolean, {nullable:true})
    totalPrice?: true;

    @Field(() => Boolean, {nullable:true})
    disclaimer?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
