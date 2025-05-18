import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MetaItemCountTotalItemsItemsPerPageTotalPagesCurrentPageCompoundUniqueInput } from './meta-item-count-total-items-items-per-page-total-pages-current-page-compound-unique.input';
import { MetaWhereInput } from './meta-where.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MetaWhereUniqueInput {

    @Field(() => MetaItemCountTotalItemsItemsPerPageTotalPagesCurrentPageCompoundUniqueInput, {nullable:true})
    itemCount_totalItems_itemsPerPage_totalPages_currentPage?: MetaItemCountTotalItemsItemsPerPageTotalPagesCurrentPageCompoundUniqueInput;

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
