import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PointsAvgAggregate {

    @Field(() => Float, {nullable:true})
    points?: number;
}
