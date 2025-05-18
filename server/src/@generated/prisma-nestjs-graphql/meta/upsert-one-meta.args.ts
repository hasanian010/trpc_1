import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MetaWhereUniqueInput } from './meta-where-unique.input';
import { Type } from 'class-transformer';
import { MetaCreateInput } from './meta-create.input';
import { MetaUpdateInput } from './meta-update.input';

@ArgsType()
export class UpsertOneMetaArgs {

    @Field(() => MetaWhereUniqueInput, {nullable:false})
    @Type(() => MetaWhereUniqueInput)
    where!: Prisma.AtLeast<MetaWhereUniqueInput, 'itemCount_totalItems_itemsPerPage_totalPages_currentPage'>;

    @Field(() => MetaCreateInput, {nullable:false})
    @Type(() => MetaCreateInput)
    create!: MetaCreateInput;

    @Field(() => MetaUpdateInput, {nullable:false})
    @Type(() => MetaUpdateInput)
    update!: MetaUpdateInput;
}
