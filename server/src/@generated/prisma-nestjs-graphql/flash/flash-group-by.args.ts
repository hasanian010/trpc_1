import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashWhereInput } from './flash-where.input';
import { Type } from 'class-transformer';
import { FlashOrderByWithAggregationInput } from './flash-order-by-with-aggregation.input';
import { FlashScalarFieldEnum } from './flash-scalar-field.enum';
import { FlashScalarWhereWithAggregatesInput } from './flash-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FlashCountAggregateInput } from './flash-count-aggregate.input';
import { FlashMinAggregateInput } from './flash-min-aggregate.input';
import { FlashMaxAggregateInput } from './flash-max-aggregate.input';

@ArgsType()
export class FlashGroupByArgs {

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    where?: FlashWhereInput;

    @Field(() => [FlashOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FlashOrderByWithAggregationInput>;

    @Field(() => [FlashScalarFieldEnum], {nullable:false})
    by!: Array<`${FlashScalarFieldEnum}`>;

    @Field(() => FlashScalarWhereWithAggregatesInput, {nullable:true})
    having?: FlashScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FlashCountAggregateInput, {nullable:true})
    _count?: FlashCountAggregateInput;

    @Field(() => FlashMinAggregateInput, {nullable:true})
    _min?: FlashMinAggregateInput;

    @Field(() => FlashMaxAggregateInput, {nullable:true})
    _max?: FlashMaxAggregateInput;
}
