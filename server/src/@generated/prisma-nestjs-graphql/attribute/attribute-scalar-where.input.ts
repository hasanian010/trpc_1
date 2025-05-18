import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AttributeScalarWhereInput {

    @Field(() => [AttributeScalarWhereInput], {nullable:true})
    AND?: Array<AttributeScalarWhereInput>;

    @Field(() => [AttributeScalarWhereInput], {nullable:true})
    OR?: Array<AttributeScalarWhereInput>;

    @Field(() => [AttributeScalarWhereInput], {nullable:true})
    NOT?: Array<AttributeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
