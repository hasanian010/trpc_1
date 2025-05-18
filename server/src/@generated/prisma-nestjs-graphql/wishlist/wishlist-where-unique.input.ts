import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WishlistUserIdProductIdCompoundUniqueInput } from './wishlist-user-id-product-id-compound-unique.input';
import { WishlistWhereInput } from './wishlist-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { ProductScalarRelationFilter } from '../product/product-scalar-relation-filter.input';

@InputType()
export class WishlistWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => WishlistUserIdProductIdCompoundUniqueInput, {nullable:true})
    userId_productId?: WishlistUserIdProductIdCompoundUniqueInput;

    @Field(() => [WishlistWhereInput], {nullable:true})
    AND?: Array<WishlistWhereInput>;

    @Field(() => [WishlistWhereInput], {nullable:true})
    OR?: Array<WishlistWhereInput>;

    @Field(() => [WishlistWhereInput], {nullable:true})
    NOT?: Array<WishlistWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => ProductScalarRelationFilter, {nullable:true})
    product?: ProductScalarRelationFilter;
}
