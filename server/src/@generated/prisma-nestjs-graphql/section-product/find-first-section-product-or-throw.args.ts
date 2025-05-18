import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionProductWhereInput } from './section-product-where.input';
import { Type } from 'class-transformer';
import { SectionProductOrderByWithRelationInput } from './section-product-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SectionProductScalarFieldEnum } from './section-product-scalar-field.enum';

@ArgsType()
export class FindFirstSectionProductOrThrowArgs {

    @Field(() => SectionProductWhereInput, {nullable:true})
    @Type(() => SectionProductWhereInput)
    where?: SectionProductWhereInput;

    @Field(() => [SectionProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SectionProductOrderByWithRelationInput>;

    @Field(() => SectionProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SectionProductScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SectionProductScalarFieldEnum}`>;
}
