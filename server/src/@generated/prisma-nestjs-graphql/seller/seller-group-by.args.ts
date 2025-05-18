import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerOrderByWithAggregationInput } from './seller-order-by-with-aggregation.input';
import { SellerScalarFieldEnum } from './seller-scalar-field.enum';
import { SellerScalarWhereWithAggregatesInput } from './seller-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SellerCountAggregateInput } from './seller-count-aggregate.input';
import { SellerAvgAggregateInput } from './seller-avg-aggregate.input';
import { SellerSumAggregateInput } from './seller-sum-aggregate.input';
import { SellerMinAggregateInput } from './seller-min-aggregate.input';
import { SellerMaxAggregateInput } from './seller-max-aggregate.input';

@ArgsType()
export class SellerGroupByArgs {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => [SellerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SellerOrderByWithAggregationInput>;

    @Field(() => [SellerScalarFieldEnum], {nullable:false})
    by!: Array<`${SellerScalarFieldEnum}`>;

    @Field(() => SellerScalarWhereWithAggregatesInput, {nullable:true})
    having?: SellerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SellerCountAggregateInput, {nullable:true})
    _count?: SellerCountAggregateInput;

    @Field(() => SellerAvgAggregateInput, {nullable:true})
    _avg?: SellerAvgAggregateInput;

    @Field(() => SellerSumAggregateInput, {nullable:true})
    _sum?: SellerSumAggregateInput;

    @Field(() => SellerMinAggregateInput, {nullable:true})
    _min?: SellerMinAggregateInput;

    @Field(() => SellerMaxAggregateInput, {nullable:true})
    _max?: SellerMaxAggregateInput;
}
