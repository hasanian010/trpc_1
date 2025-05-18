import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class WishlistScalarWhereInput {

    @Field(() => [WishlistScalarWhereInput], {nullable:true})
    AND?: Array<WishlistScalarWhereInput>;

    @Field(() => [WishlistScalarWhereInput], {nullable:true})
    OR?: Array<WishlistScalarWhereInput>;

    @Field(() => [WishlistScalarWhereInput], {nullable:true})
    NOT?: Array<WishlistScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
