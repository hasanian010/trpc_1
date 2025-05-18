import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWishlistsInput } from '../user/user-create-nested-one-without-wishlists.input';

@InputType()
export class WishlistCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutWishlistsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutWishlistsInput;
}
