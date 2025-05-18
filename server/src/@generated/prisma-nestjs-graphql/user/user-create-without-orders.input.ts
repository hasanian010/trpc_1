import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProviderCreateNestedManyWithoutUserInput } from '../provider/provider-create-nested-many-without-user.input';
import { AddressCreateNestedManyWithoutUserInput } from '../address/address-create-nested-many-without-user.input';
import { SellerCreateNestedManyWithoutUserInput } from '../seller/seller-create-nested-many-without-user.input';
import { PointsCreateNestedManyWithoutUserInput } from '../points/points-create-nested-many-without-user.input';
import { UserPointsCreateNestedOneWithoutUserInput } from '../user-points/user-points-create-nested-one-without-user.input';
import { RefundCreateNestedManyWithoutUserInput } from '../refund/refund-create-nested-many-without-user.input';
import { RefundableCreateNestedManyWithoutUserInput } from '../refundable/refundable-create-nested-many-without-user.input';
import { WithdrawCreateNestedManyWithoutReleasedByInput } from '../withdraw/withdraw-create-nested-many-without-released-by.input';
import { WishlistCreateNestedManyWithoutUserInput } from '../wishlist/wishlist-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutOrdersInput {

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

    @Field(() => ProviderCreateNestedManyWithoutUserInput, {nullable:true})
    providers?: ProviderCreateNestedManyWithoutUserInput;

    @Field(() => AddressCreateNestedManyWithoutUserInput, {nullable:true})
    addresses?: AddressCreateNestedManyWithoutUserInput;

    @Field(() => SellerCreateNestedManyWithoutUserInput, {nullable:true})
    sellers?: SellerCreateNestedManyWithoutUserInput;

    @Field(() => PointsCreateNestedManyWithoutUserInput, {nullable:true})
    points?: PointsCreateNestedManyWithoutUserInput;

    @Field(() => UserPointsCreateNestedOneWithoutUserInput, {nullable:true})
    userPoints?: UserPointsCreateNestedOneWithoutUserInput;

    @Field(() => RefundCreateNestedManyWithoutUserInput, {nullable:true})
    refunds?: RefundCreateNestedManyWithoutUserInput;

    @Field(() => RefundableCreateNestedManyWithoutUserInput, {nullable:true})
    refundables?: RefundableCreateNestedManyWithoutUserInput;

    @Field(() => WithdrawCreateNestedManyWithoutReleasedByInput, {nullable:true})
    releasedWithdraws?: WithdrawCreateNestedManyWithoutReleasedByInput;

    @Field(() => WishlistCreateNestedManyWithoutUserInput, {nullable:true})
    wishlists?: WishlistCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutUserInput;
}
