import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BankUncheckedCreateNestedOneWithoutSellerInput } from '../bank/bank-unchecked-create-nested-one-without-seller.input';
import { ProductUncheckedCreateNestedManyWithoutSellerInput } from '../product/product-unchecked-create-nested-many-without-seller.input';
import { OrderSellerUncheckedCreateNestedManyWithoutSellerInput } from '../order-seller/order-seller-unchecked-create-nested-many-without-seller.input';
import { RefundableUncheckedCreateNestedManyWithoutSellerInput } from '../refundable/refundable-unchecked-create-nested-many-without-seller.input';
import { WithdrawUncheckedCreateNestedManyWithoutSellerInput } from '../withdraw/withdraw-unchecked-create-nested-many-without-seller.input';
import { ReviewUncheckedCreateNestedManyWithoutSellerInput } from '../review/review-unchecked-create-nested-many-without-seller.input';

@InputType()
export class SellerUncheckedCreateWithoutIncomesInput {

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

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Float, {nullable:true})
    totalReview?: number;

    @Field(() => Float, {nullable:true})
    totalRating?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BankUncheckedCreateNestedOneWithoutSellerInput, {nullable:true})
    bank?: BankUncheckedCreateNestedOneWithoutSellerInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutSellerInput;

    @Field(() => OrderSellerUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    orderSellers?: OrderSellerUncheckedCreateNestedManyWithoutSellerInput;

    @Field(() => RefundableUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    refundables?: RefundableUncheckedCreateNestedManyWithoutSellerInput;

    @Field(() => WithdrawUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    withdraws?: WithdrawUncheckedCreateNestedManyWithoutSellerInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutSellerInput;
}
