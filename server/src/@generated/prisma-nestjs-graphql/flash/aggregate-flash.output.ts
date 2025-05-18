import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FlashCountAggregate } from './flash-count-aggregate.output';
import { FlashMinAggregate } from './flash-min-aggregate.output';
import { FlashMaxAggregate } from './flash-max-aggregate.output';

@ObjectType()
export class AggregateFlash {

    @Field(() => FlashCountAggregate, {nullable:true})
    _count?: FlashCountAggregate;

    @Field(() => FlashMinAggregate, {nullable:true})
    _min?: FlashMinAggregate;

    @Field(() => FlashMaxAggregate, {nullable:true})
    _max?: FlashMaxAggregate;
}
