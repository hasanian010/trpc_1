import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentInfoCountAggregate } from './payment-info-count-aggregate.output';
import { PaymentInfoMinAggregate } from './payment-info-min-aggregate.output';
import { PaymentInfoMaxAggregate } from './payment-info-max-aggregate.output';

@ObjectType()
export class AggregatePaymentInfo {

    @Field(() => PaymentInfoCountAggregate, {nullable:true})
    _count?: PaymentInfoCountAggregate;

    @Field(() => PaymentInfoMinAggregate, {nullable:true})
    _min?: PaymentInfoMinAggregate;

    @Field(() => PaymentInfoMaxAggregate, {nullable:true})
    _max?: PaymentInfoMaxAggregate;
}
