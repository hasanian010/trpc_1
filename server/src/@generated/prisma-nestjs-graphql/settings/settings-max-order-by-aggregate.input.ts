import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SettingsMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    logo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    icon?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    siteTitle?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slogan?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    metaTitle?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    metaDescription?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    siteUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ogTitle?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ogDescription?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ogImage?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    corporateOffice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    headOffice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    facebook?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    instagram?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    youtube?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    twitter?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    linkedIn?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
