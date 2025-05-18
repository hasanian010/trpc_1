import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductCountAggregate } from './product-count-aggregate.output';
import { ProductMinAggregate } from './product-min-aggregate.output';
import { ProductMaxAggregate } from './product-max-aggregate.output';

@ObjectType()
export class ProductGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    mainCategoryId!: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => String, {nullable:true})
    brandId?: string;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => String, {nullable:true})
    minPurchase?: string;

    @Field(() => Boolean, {nullable:false})
    refundAble!: boolean;

    @Field(() => [String], {nullable:true})
    images?: Array<string>;

    @Field(() => String, {nullable:true})
    youtubeLink?: string;

    @Field(() => String, {nullable:true})
    flashId?: string;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => String, {nullable:false})
    quantity!: string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    visibility!: boolean;

    @Field(() => Boolean, {nullable:false})
    isApproved!: boolean;

    @Field(() => String, {nullable:true})
    estimateDelivery?: string;

    @Field(() => String, {nullable:true})
    warranty?: string;

    @Field(() => Boolean, {nullable:false})
    showStock!: boolean;

    @Field(() => String, {nullable:false})
    tax!: string;

    @Field(() => String, {nullable:false})
    taxUnit!: string;

    @Field(() => String, {nullable:false})
    totalPrice!: string;

    @Field(() => String, {nullable:false})
    disclaimer!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: ProductCountAggregate;

    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: ProductMinAggregate;

    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: ProductMaxAggregate;
}
