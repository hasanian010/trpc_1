import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BankCountAggregate } from './bank-count-aggregate.output';
import { BankMinAggregate } from './bank-min-aggregate.output';
import { BankMaxAggregate } from './bank-max-aggregate.output';

@ObjectType()
export class AggregateBank {

    @Field(() => BankCountAggregate, {nullable:true})
    _count?: BankCountAggregate;

    @Field(() => BankMinAggregate, {nullable:true})
    _min?: BankMinAggregate;

    @Field(() => BankMaxAggregate, {nullable:true})
    _max?: BankMaxAggregate;
}
