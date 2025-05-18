import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlatformWhereInput } from './platform-where.input';
import { Type } from 'class-transformer';
import { PlatformOrderByWithRelationInput } from './platform-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlatformWhereUniqueInput } from './platform-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlatformCountAggregateInput } from './platform-count-aggregate.input';
import { PlatformMinAggregateInput } from './platform-min-aggregate.input';
import { PlatformMaxAggregateInput } from './platform-max-aggregate.input';

@ArgsType()
export class PlatformAggregateArgs {

    @Field(() => PlatformWhereInput, {nullable:true})
    @Type(() => PlatformWhereInput)
    where?: PlatformWhereInput;

    @Field(() => [PlatformOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlatformOrderByWithRelationInput>;

    @Field(() => PlatformWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlatformWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlatformCountAggregateInput, {nullable:true})
    _count?: PlatformCountAggregateInput;

    @Field(() => PlatformMinAggregateInput, {nullable:true})
    _min?: PlatformMinAggregateInput;

    @Field(() => PlatformMaxAggregateInput, {nullable:true})
    _max?: PlatformMaxAggregateInput;
}
