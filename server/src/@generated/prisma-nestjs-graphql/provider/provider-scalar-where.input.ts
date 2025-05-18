import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProviderScalarWhereInput {

    @Field(() => [ProviderScalarWhereInput], {nullable:true})
    AND?: Array<ProviderScalarWhereInput>;

    @Field(() => [ProviderScalarWhereInput], {nullable:true})
    OR?: Array<ProviderScalarWhereInput>;

    @Field(() => [ProviderScalarWhereInput], {nullable:true})
    NOT?: Array<ProviderScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
