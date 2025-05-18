import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlatformCountAggregate } from './platform-count-aggregate.output';
import { PlatformMinAggregate } from './platform-min-aggregate.output';
import { PlatformMaxAggregate } from './platform-max-aggregate.output';

@ObjectType()
export class AggregatePlatform {

    @Field(() => PlatformCountAggregate, {nullable:true})
    _count?: PlatformCountAggregate;

    @Field(() => PlatformMinAggregate, {nullable:true})
    _min?: PlatformMinAggregate;

    @Field(() => PlatformMaxAggregate, {nullable:true})
    _max?: PlatformMaxAggregate;
}
