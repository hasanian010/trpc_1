import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Bank } from '../bank/bank.model';
import { User } from '../user/user.model';
import { Product } from '../product/product.model';
import { OrderSeller } from '../order-seller/order-seller.model';
import { Refundable } from '../refundable/refundable.model';
import { Withdraw } from '../withdraw/withdraw.model';
import { Income } from '../income/income.model';
import { Review } from '../review/review.model';
import { SellerCount } from './seller-count.output';

@ObjectType()
export class Seller {

    @Field(() => ID, {nullable:false})
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
    metaTitle!: string | null;

    @Field(() => String, {nullable:true})
    metaDescription!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isVerified!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isBanned!: boolean;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Float, {defaultValue:0,nullable:false})
    totalReview!: number;

    @Field(() => Float, {defaultValue:0,nullable:false})
    totalRating!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Bank, {nullable:true})
    bank?: Bank | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => [OrderSeller], {nullable:true})
    orderSellers?: Array<OrderSeller>;

    @Field(() => [Refundable], {nullable:true})
    refundables?: Array<Refundable>;

    @Field(() => [Withdraw], {nullable:true})
    withdraws?: Array<Withdraw>;

    @Field(() => [Income], {nullable:true})
    incomes?: Array<Income>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => SellerCount, {nullable:false})
    _count?: SellerCount;
}
