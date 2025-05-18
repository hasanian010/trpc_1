import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MetaWhereUniqueInput } from './meta-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMetaOrThrowArgs {

    @Field(() => MetaWhereUniqueInput, {nullable:false})
    @Type(() => MetaWhereUniqueInput)
    where!: Prisma.AtLeast<MetaWhereUniqueInput, 'itemCount_totalItems_itemsPerPage_totalPages_currentPage'>;
}
