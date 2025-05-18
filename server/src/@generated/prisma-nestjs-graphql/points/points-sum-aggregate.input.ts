import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PointsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    points?: true;
}
