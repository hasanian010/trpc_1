import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SettingsCountOrderByAggregateInput } from './settings-count-order-by-aggregate.input';
import { SettingsMaxOrderByAggregateInput } from './settings-max-order-by-aggregate.input';
import { SettingsMinOrderByAggregateInput } from './settings-min-order-by-aggregate.input';

@InputType()
export class SettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    logo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    icon?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    siteTitle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    slogan?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metaTitle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metaDescription?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    metaTag?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    siteUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ogTitle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ogDescription?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ogImage?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    corporateOffice?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    headOffice?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    facebook?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    instagram?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    youtube?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    twitter?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    linkedIn?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SettingsCountOrderByAggregateInput, {nullable:true})
    _count?: SettingsCountOrderByAggregateInput;

    @Field(() => SettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: SettingsMaxOrderByAggregateInput;

    @Field(() => SettingsMinOrderByAggregateInput, {nullable:true})
    _min?: SettingsMinOrderByAggregateInput;
}
