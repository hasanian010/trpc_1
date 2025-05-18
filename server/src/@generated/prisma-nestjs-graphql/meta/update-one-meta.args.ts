import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaUpdateInput } from './meta-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MetaWhereUniqueInput } from './meta-where-unique.input';

@ArgsType()
export class UpdateOneMetaArgs {

    @Field(() => MetaUpdateInput, {nullable:false})
    @Type(() => MetaUpdateInput)
    data!: MetaUpdateInput;

    @Field(() => MetaWhereUniqueInput, {nullable:false})
    @Type(() => MetaWhereUniqueInput)
    where!: Prisma.AtLeast<MetaWhereUniqueInput, 'itemCount_totalItems_itemsPerPage_totalPages_currentPage'>;
}
