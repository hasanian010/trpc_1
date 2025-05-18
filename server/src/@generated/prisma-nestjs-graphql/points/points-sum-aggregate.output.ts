import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PointsSumAggregate {

    @Field(() => Float, {nullable:true})
    points?: number;
}
