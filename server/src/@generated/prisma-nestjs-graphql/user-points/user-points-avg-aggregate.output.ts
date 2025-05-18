import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserPointsAvgAggregate {

    @Field(() => Float, {nullable:true})
    points?: number;
}
