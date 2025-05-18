import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { AddressUncheckedCreateNestedManyWithoutUserInput } from '../address/address-unchecked-create-nested-many-without-user.input';
import { SellerUncheckedCreateNestedManyWithoutUserInput } from '../seller/seller-unchecked-create-nested-many-without-user.input';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';
import { PointsUncheckedCreateNestedManyWithoutUserInput } from '../points/points-unchecked-create-nested-many-without-user.input';
import { UserPointsUncheckedCreateNestedOneWithoutUserInput } from '../user-points/user-points-unchecked-create-nested-one-without-user.input';
import { RefundUncheckedCreateNestedManyWithoutUserInput } from '../refund/refund-unchecked-create-nested-many-without-user.input';
import { RefundableUncheckedCreateNestedManyWithoutUserInput } from '../refundable/refundable-unchecked-create-nested-many-without-user.input';
import { WithdrawUncheckedCreateNestedManyWithoutReleasedByInput } from '../withdraw/withdraw-unchecked-create-nested-many-without-released-by.input';
import { WishlistUncheckedCreateNestedManyWithoutUserInput } from '../wishlist/wishlist-unchecked-create-nested-many-without-user.input';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutProvidersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    otp?: string;

    @Field(() => String, {nullable:true})
    newPhone?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    isBanned?: boolean;

    @Field(() => Role, {nullable:true})
    role?: `${Role}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AddressUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SellerUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    sellers?: SellerUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PointsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    points?: PointsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserPointsUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    userPoints?: UserPointsUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => RefundUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refunds?: RefundUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => RefundableUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refundables?: RefundableUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => WithdrawUncheckedCreateNestedManyWithoutReleasedByInput, {nullable:true})
    releasedWithdraws?: WithdrawUncheckedCreateNestedManyWithoutReleasedByInput;

    @Field(() => WishlistUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    wishlists?: WishlistUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
}
