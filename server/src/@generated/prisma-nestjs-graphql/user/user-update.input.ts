import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProviderUpdateManyWithoutUserNestedInput } from '../provider/provider-update-many-without-user-nested.input';
import { AddressUpdateManyWithoutUserNestedInput } from '../address/address-update-many-without-user-nested.input';
import { SellerUpdateManyWithoutUserNestedInput } from '../seller/seller-update-many-without-user-nested.input';
import { OrderUpdateManyWithoutUserNestedInput } from '../order/order-update-many-without-user-nested.input';
import { PointsUpdateManyWithoutUserNestedInput } from '../points/points-update-many-without-user-nested.input';
import { UserPointsUpdateOneWithoutUserNestedInput } from '../user-points/user-points-update-one-without-user-nested.input';
import { RefundUpdateManyWithoutUserNestedInput } from '../refund/refund-update-many-without-user-nested.input';
import { RefundableUpdateManyWithoutUserNestedInput } from '../refundable/refundable-update-many-without-user-nested.input';
import { WithdrawUpdateManyWithoutReleasedByNestedInput } from '../withdraw/withdraw-update-many-without-released-by-nested.input';
import { WishlistUpdateManyWithoutUserNestedInput } from '../wishlist/wishlist-update-many-without-user-nested.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    otp?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    newPhone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isBanned?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProviderUpdateManyWithoutUserNestedInput, {nullable:true})
    providers?: ProviderUpdateManyWithoutUserNestedInput;

    @Field(() => AddressUpdateManyWithoutUserNestedInput, {nullable:true})
    addresses?: AddressUpdateManyWithoutUserNestedInput;

    @Field(() => SellerUpdateManyWithoutUserNestedInput, {nullable:true})
    sellers?: SellerUpdateManyWithoutUserNestedInput;

    @Field(() => OrderUpdateManyWithoutUserNestedInput, {nullable:true})
    orders?: OrderUpdateManyWithoutUserNestedInput;

    @Field(() => PointsUpdateManyWithoutUserNestedInput, {nullable:true})
    points?: PointsUpdateManyWithoutUserNestedInput;

    @Field(() => UserPointsUpdateOneWithoutUserNestedInput, {nullable:true})
    userPoints?: UserPointsUpdateOneWithoutUserNestedInput;

    @Field(() => RefundUpdateManyWithoutUserNestedInput, {nullable:true})
    refunds?: RefundUpdateManyWithoutUserNestedInput;

    @Field(() => RefundableUpdateManyWithoutUserNestedInput, {nullable:true})
    refundables?: RefundableUpdateManyWithoutUserNestedInput;

    @Field(() => WithdrawUpdateManyWithoutReleasedByNestedInput, {nullable:true})
    releasedWithdraws?: WithdrawUpdateManyWithoutReleasedByNestedInput;

    @Field(() => WishlistUpdateManyWithoutUserNestedInput, {nullable:true})
    wishlists?: WishlistUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
}
