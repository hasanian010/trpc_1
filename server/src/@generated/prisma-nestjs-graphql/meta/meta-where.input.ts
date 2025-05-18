import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MetaWhereInput {

    @Field(() => [MetaWhereInput], {nullable:true})
    AND?: Array<MetaWhereInput>;

    @Field(() => [MetaWhereInput], {nullable:true})
    OR?: Array<MetaWhereInput>;

    @Field(() => [MetaWhereInput], {nullable:true})
    NOT?: Array<MetaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    itemCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    totalItems?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    itemsPerPage?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPages?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currentPage?: IntFilter;
}
