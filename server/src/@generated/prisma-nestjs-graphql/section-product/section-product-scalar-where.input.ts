import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SectionProductScalarWhereInput {

    @Field(() => [SectionProductScalarWhereInput], {nullable:true})
    AND?: Array<SectionProductScalarWhereInput>;

    @Field(() => [SectionProductScalarWhereInput], {nullable:true})
    OR?: Array<SectionProductScalarWhereInput>;

    @Field(() => [SectionProductScalarWhereInput], {nullable:true})
    NOT?: Array<SectionProductScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sectionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
