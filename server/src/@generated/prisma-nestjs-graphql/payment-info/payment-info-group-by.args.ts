import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { Type } from 'class-transformer';
import { PaymentInfoOrderByWithAggregationInput } from './payment-info-order-by-with-aggregation.input';
import { PaymentInfoScalarFieldEnum } from './payment-info-scalar-field.enum';
import { PaymentInfoScalarWhereWithAggregatesInput } from './payment-info-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PaymentInfoCountAggregateInput } from './payment-info-count-aggregate.input';
import { PaymentInfoMinAggregateInput } from './payment-info-min-aggregate.input';
import { PaymentInfoMaxAggregateInput } from './payment-info-max-aggregate.input';

@ArgsType()
export class PaymentInfoGroupByArgs {

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    where?: PaymentInfoWhereInput;

    @Field(() => [PaymentInfoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PaymentInfoOrderByWithAggregationInput>;

    @Field(() => [PaymentInfoScalarFieldEnum], {nullable:false})
    by!: Array<`${PaymentInfoScalarFieldEnum}`>;

    @Field(() => PaymentInfoScalarWhereWithAggregatesInput, {nullable:true})
    having?: PaymentInfoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PaymentInfoCountAggregateInput, {nullable:true})
    _count?: PaymentInfoCountAggregateInput;

    @Field(() => PaymentInfoMinAggregateInput, {nullable:true})
    _min?: PaymentInfoMinAggregateInput;

    @Field(() => PaymentInfoMaxAggregateInput, {nullable:true})
    _max?: PaymentInfoMaxAggregateInput;
}
