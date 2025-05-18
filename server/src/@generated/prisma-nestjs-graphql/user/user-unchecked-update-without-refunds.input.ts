import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProviderUncheckedUpdateManyWithoutUserNestedInput } from '../provider/provider-unchecked-update-many-without-user-nested.input';
import { AddressUncheckedUpdateManyWithoutUserNestedInput } from '../address/address-unchecked-update-many-without-user-nested.input';
import { SellerUncheckedUpdateManyWithoutUserNestedInput } from '../seller/seller-unchecked-update-many-without-user-nested.input';
import { OrderUncheckedUpdateManyWithoutUserNestedInput } from '../order/order-unchecked-update-many-without-user-nested.input';
import { PointsUncheckedUpdateManyWithoutUserNestedInput } from '../points/points-unchecked-update-many-without-user-nested.input';
import { UserPointsUncheckedUpdateOneWithoutUserNestedInput } from '../user-points/user-points-unchecked-update-one-without-user-nested.input';
import { RefundableUncheckedUpdateManyWithoutUserNestedInput } from '../refundable/refundable-unchecked-update-many-without-user-nested.input';
import { WithdrawUncheckedUpdateManyWithoutReleasedByNestedInput } from '../withdraw/withdraw-unchecked-update-many-without-released-by-nested.input';
import { WishlistUncheckedUpdateManyWithoutUserNestedInput } from '../wishlist/wishlist-unchecked-update-many-without-user-nested.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutRefundsInput {

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

    @Field(() => ProviderUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    providers?: ProviderUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => AddressUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SellerUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    sellers?: SellerUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => OrderUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PointsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserPointsUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    userPoints?: UserPointsUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => RefundableUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refundables?: RefundableUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => WithdrawUncheckedUpdateManyWithoutReleasedByNestedInput, {nullable:true})
    releasedWithdraws?: WithdrawUncheckedUpdateManyWithoutReleasedByNestedInput;

    @Field(() => WishlistUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    wishlists?: WishlistUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
}
