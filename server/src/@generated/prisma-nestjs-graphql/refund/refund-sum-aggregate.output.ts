import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RefundSumAggregate {

    @Field(() => Float, {nullable:true})
    quantity?: number;
}
