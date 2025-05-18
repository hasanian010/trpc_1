import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class IncomeAvgAggregate {

    @Field(() => Float, {nullable:true})
    income?: number;
}
