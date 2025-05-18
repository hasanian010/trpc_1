import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductAttributeScalarWhereInput {

    @Field(() => [ProductAttributeScalarWhereInput], {nullable:true})
    AND?: Array<ProductAttributeScalarWhereInput>;

    @Field(() => [ProductAttributeScalarWhereInput], {nullable:true})
    OR?: Array<ProductAttributeScalarWhereInput>;

    @Field(() => [ProductAttributeScalarWhereInput], {nullable:true})
    NOT?: Array<ProductAttributeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
