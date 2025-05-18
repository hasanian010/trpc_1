import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentInfoCountAggregate } from './payment-info-count-aggregate.output';
import { PaymentInfoMinAggregate } from './payment-info-min-aggregate.output';
import { PaymentInfoMaxAggregate } from './payment-info-max-aggregate.output';

@ObjectType()
export class PaymentInfoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    paymentMethod?: string;

    @Field(() => String, {nullable:true})
    paymentId?: string;

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PaymentInfoCountAggregate, {nullable:true})
    _count?: PaymentInfoCountAggregate;

    @Field(() => PaymentInfoMinAggregate, {nullable:true})
    _min?: PaymentInfoMinAggregate;

    @Field(() => PaymentInfoMaxAggregate, {nullable:true})
    _max?: PaymentInfoMaxAggregate;
}
