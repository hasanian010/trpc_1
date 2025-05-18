import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ValuesListRelationFilter } from '../values/values-list-relation-filter.input';
import { ProductAttributeListRelationFilter } from '../product-attribute/product-attribute-list-relation-filter.input';

@InputType()
export class AttributeWhereInput {

    @Field(() => [AttributeWhereInput], {nullable:true})
    AND?: Array<AttributeWhereInput>;

    @Field(() => [AttributeWhereInput], {nullable:true})
    OR?: Array<AttributeWhereInput>;

    @Field(() => [AttributeWhereInput], {nullable:true})
    NOT?: Array<AttributeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ValuesListRelationFilter, {nullable:true})
    values?: ValuesListRelationFilter;

    @Field(() => ProductAttributeListRelationFilter, {nullable:true})
    productAttributes?: ProductAttributeListRelationFilter;
}
