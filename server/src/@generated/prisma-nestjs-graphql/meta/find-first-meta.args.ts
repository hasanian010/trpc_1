import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaWhereInput } from './meta-where.input';
import { Type } from 'class-transformer';
import { MetaOrderByWithRelationInput } from './meta-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MetaWhereUniqueInput } from './meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MetaScalarFieldEnum } from './meta-scalar-field.enum';

@ArgsType()
export class FindFirstMetaArgs {

    @Field(() => MetaWhereInput, {nullable:true})
    @Type(() => MetaWhereInput)
    where?: MetaWhereInput;

    @Field(() => [MetaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MetaOrderByWithRelationInput>;

    @Field(() => MetaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MetaWhereUniqueInput, 'itemCount_totalItems_itemsPerPage_totalPages_currentPage'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MetaScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MetaScalarFieldEnum}`>;
}
