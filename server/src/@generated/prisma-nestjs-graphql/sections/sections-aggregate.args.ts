import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';
import { Type } from 'class-transformer';
import { SectionsOrderByWithRelationInput } from './sections-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SectionsCountAggregateInput } from './sections-count-aggregate.input';
import { SectionsMinAggregateInput } from './sections-min-aggregate.input';
import { SectionsMaxAggregateInput } from './sections-max-aggregate.input';

@ArgsType()
export class SectionsAggregateArgs {

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;

    @Field(() => [SectionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SectionsOrderByWithRelationInput>;

    @Field(() => SectionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SectionsCountAggregateInput, {nullable:true})
    _count?: SectionsCountAggregateInput;

    @Field(() => SectionsMinAggregateInput, {nullable:true})
    _min?: SectionsMinAggregateInput;

    @Field(() => SectionsMaxAggregateInput, {nullable:true})
    _max?: SectionsMaxAggregateInput;
}
