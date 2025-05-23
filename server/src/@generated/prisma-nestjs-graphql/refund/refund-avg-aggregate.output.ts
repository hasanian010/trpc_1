import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RefundAvgAggregate {

    @Field(() => Float, {nullable:true})
    quantity?: number;
}
