import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlatformWhereInput } from './platform-where.input';
import { Type } from 'class-transformer';
import { PlatformOrderByWithAggregationInput } from './platform-order-by-with-aggregation.input';
import { PlatformScalarFieldEnum } from './platform-scalar-field.enum';
import { PlatformScalarWhereWithAggregatesInput } from './platform-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlatformCountAggregateInput } from './platform-count-aggregate.input';
import { PlatformMinAggregateInput } from './platform-min-aggregate.input';
import { PlatformMaxAggregateInput } from './platform-max-aggregate.input';

@ArgsType()
export class PlatformGroupByArgs {

    @Field(() => PlatformWhereInput, {nullable:true})
    @Type(() => PlatformWhereInput)
    where?: PlatformWhereInput;

    @Field(() => [PlatformOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlatformOrderByWithAggregationInput>;

    @Field(() => [PlatformScalarFieldEnum], {nullable:false})
    by!: Array<`${PlatformScalarFieldEnum}`>;

    @Field(() => PlatformScalarWhereWithAggregatesInput, {nullable:true})
    having?: PlatformScalarWhereWithAggregatesInput;

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
