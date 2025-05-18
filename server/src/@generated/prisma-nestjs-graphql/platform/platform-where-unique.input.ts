import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlatformWhereInput } from './platform-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PlatformWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PlatformWhereInput], {nullable:true})
    AND?: Array<PlatformWhereInput>;

    @Field(() => [PlatformWhereInput], {nullable:true})
    OR?: Array<PlatformWhereInput>;

    @Field(() => [PlatformWhereInput], {nullable:true})
    NOT?: Array<PlatformWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    charge?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
