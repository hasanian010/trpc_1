import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistScalarWhereInput } from './wishlist-scalar-where.input';
import { Type } from 'class-transformer';
import { WishlistUpdateManyMutationInput } from './wishlist-update-many-mutation.input';

@InputType()
export class WishlistUpdateManyWithWhereWithoutProductInput {

    @Field(() => WishlistScalarWhereInput, {nullable:false})
    @Type(() => WishlistScalarWhereInput)
    where!: WishlistScalarWhereInput;

    @Field(() => WishlistUpdateManyMutationInput, {nullable:false})
    @Type(() => WishlistUpdateManyMutationInput)
    data!: WishlistUpdateManyMutationInput;
}
