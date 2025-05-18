import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BannerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [BannerWhereInput], {nullable:true})
    AND?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    OR?: Array<BannerWhereInput>;

    @Field(() => [BannerWhereInput], {nullable:true})
    NOT?: Array<BannerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
