import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';

@InputType()
export class ProductCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Boolean, {nullable:true})
    refundAble?: boolean;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

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

    @Field(() => String, {nullable:false})
    tax!: string;

    @Field(() => String, {nullable:false})
    taxUnit!: string;

    @Field(() => String, {nullable:false})
    totalPrice!: string;

    @Field(() => String, {nullable:false})
    disclaimer!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
