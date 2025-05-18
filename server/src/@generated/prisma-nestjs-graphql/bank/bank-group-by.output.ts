import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BankCountAggregate } from './bank-count-aggregate.output';
import { BankMinAggregate } from './bank-min-aggregate.output';
import { BankMaxAggregate } from './bank-max-aggregate.output';

@ObjectType()
export class BankGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    accNumber!: string;

    @Field(() => String, {nullable:false})
    routing!: string;

    @Field(() => String, {nullable:false})
    bankName!: string;

    @Field(() => String, {nullable:false})
    branch!: string;

    @Field(() => String, {nullable:true})
    sellerId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BankCountAggregate, {nullable:true})
    _count?: BankCountAggregate;

    @Field(() => BankMinAggregate, {nullable:true})
    _min?: BankMinAggregate;

    @Field(() => BankMaxAggregate, {nullable:true})
    _max?: BankMaxAggregate;
}
