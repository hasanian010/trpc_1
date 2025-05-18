import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => String, {nullable:true})
    mainCategoryId?: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => String, {nullable:true})
    brandId?: string;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => String, {nullable:true})
    minPurchase?: string;

    @Field(() => Boolean, {nullable:true})
    refundAble?: boolean;

    @Field(() => String, {nullable:true})
    youtubeLink?: string;

    @Field(() => String, {nullable:true})
    flashId?: string;

    @Field(() => String, {nullable:true})
    price?: string;

    @Field(() => String, {nullable:true})
    quantity?: string;

    @Field(() => String, {nullable:true})
    discount?: string;

    @Field(() => String, {nullable:true})
    discountUnit?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    visibility?: boolean;

    @Field(() => Boolean, {nullable:true})
    isApproved?: boolean;

    @Field(() => String, {nullable:true})
    estimateDelivery?: string;

    @Field(() => String, {nullable:true})
    warranty?: string;

    @Field(() => Boolean, {nullable:true})
    showStock?: boolean;

    @Field(() => String, {nullable:true})
    tax?: string;

    @Field(() => String, {nullable:true})
    taxUnit?: string;

    @Field(() => String, {nullable:true})
    totalPrice?: string;

    @Field(() => String, {nullable:true})
    disclaimer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
