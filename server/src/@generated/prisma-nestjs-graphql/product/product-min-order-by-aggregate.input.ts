import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProductMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    mainCategoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    brandId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    minPurchase?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    refundAble?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    youtubeLink?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flashId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discountUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    visibility?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isApproved?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    estimateDelivery?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    warranty?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    showStock?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxUnit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    disclaimer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
