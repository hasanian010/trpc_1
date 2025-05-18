import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Provider } from '../provider/provider.model';
import { Address } from '../address/address.model';
import { Seller } from '../seller/seller.model';
import { Order } from '../order/order.model';
import { Points } from '../points/points.model';
import { UserPoints } from '../user-points/user-points.model';
import { Refund } from '../refund/refund.model';
import { Refundable } from '../refundable/refundable.model';
import { Withdraw } from '../withdraw/withdraw.model';
import { Wishlist } from '../wishlist/wishlist.model';
import { Review } from '../review/review.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => String, {nullable:true})
    otp!: string | null;

    @Field(() => String, {nullable:true})
    newPhone!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isVerified!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isBanned!: boolean;

    @Field(() => Role, {defaultValue:'USER',nullable:false})
    role!: `${Role}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Provider], {nullable:true})
    providers?: Array<Provider>;

    @Field(() => [Address], {nullable:true})
    addresses?: Array<Address>;

    @Field(() => [Seller], {nullable:true})
    sellers?: Array<Seller>;

    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;

    @Field(() => [Points], {nullable:true})
    points?: Array<Points>;

    @Field(() => UserPoints, {nullable:true})
    userPoints?: UserPoints | null;

    @Field(() => [Refund], {nullable:true})
    refunds?: Array<Refund>;

    @Field(() => [Refundable], {nullable:true})
    refundables?: Array<Refundable>;

    @Field(() => [Withdraw], {nullable:true})
    releasedWithdraws?: Array<Withdraw>;

    @Field(() => [Wishlist], {nullable:true})
    wishlists?: Array<Wishlist>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
