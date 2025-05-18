import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class ProviderWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => [ProviderWhereInput], {nullable:true})
    AND?: Array<ProviderWhereInput>;

    @Field(() => [ProviderWhereInput], {nullable:true})
    OR?: Array<ProviderWhereInput>;

    @Field(() => [ProviderWhereInput], {nullable:true})
    NOT?: Array<ProviderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}
