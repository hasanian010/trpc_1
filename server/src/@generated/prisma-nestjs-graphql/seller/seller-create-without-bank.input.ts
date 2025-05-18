import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSellersInput } from '../user/user-create-nested-one-without-sellers.input';
import { ProductCreateNestedManyWithoutSellerInput } from '../product/product-create-nested-many-without-seller.input';
import { OrderSellerCreateNestedManyWithoutSellerInput } from '../order-seller/order-seller-create-nested-many-without-seller.input';
import { RefundableCreateNestedManyWithoutSellerInput } from '../refundable/refundable-create-nested-many-without-seller.input';
import { WithdrawCreateNestedManyWithoutSellerInput } from '../withdraw/withdraw-create-nested-many-without-seller.input';
import { IncomeCreateNestedManyWithoutSellerInput } from '../income/income-create-nested-many-without-seller.input';
import { ReviewCreateNestedManyWithoutSellerInput } from '../review/review-create-nested-many-without-seller.input';

@InputType()
export class SellerCreateWithoutBankInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    isBanned?: boolean;

    @Field(() => Float, {nullable:true})
    totalReview?: number;

    @Field(() => Float, {nullable:true})
    totalRating?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutSellersInput, {nullable:true})
    user?: UserCreateNestedOneWithoutSellersInput;

    @Field(() => ProductCreateNestedManyWithoutSellerInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutSellerInput;

    @Field(() => OrderSellerCreateNestedManyWithoutSellerInput, {nullable:true})
    orderSellers?: OrderSellerCreateNestedManyWithoutSellerInput;

    @Field(() => RefundableCreateNestedManyWithoutSellerInput, {nullable:true})
    refundables?: RefundableCreateNestedManyWithoutSellerInput;

    @Field(() => WithdrawCreateNestedManyWithoutSellerInput, {nullable:true})
    withdraws?: WithdrawCreateNestedManyWithoutSellerInput;

    @Field(() => IncomeCreateNestedManyWithoutSellerInput, {nullable:true})
    incomes?: IncomeCreateNestedManyWithoutSellerInput;

    @Field(() => ReviewCreateNestedManyWithoutSellerInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutSellerInput;
}
