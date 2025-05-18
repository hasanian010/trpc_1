import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { Type } from 'class-transformer';
import { PaymentInfoOrderByWithRelationInput } from './payment-info-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PaymentInfoWhereUniqueInput } from './payment-info-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentInfoCountAggregateInput } from './payment-info-count-aggregate.input';
import { PaymentInfoMinAggregateInput } from './payment-info-min-aggregate.input';
import { PaymentInfoMaxAggregateInput } from './payment-info-max-aggregate.input';

@ArgsType()
export class PaymentInfoAggregateArgs {

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    where?: PaymentInfoWhereInput;

    @Field(() => [PaymentInfoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PaymentInfoOrderByWithRelationInput>;

    @Field(() => PaymentInfoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PaymentInfoWhereUniqueInput, 'id' | 'orderId'>;

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
