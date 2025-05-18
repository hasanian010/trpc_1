import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MainCategoryCountAggregate } from './main-category-count-aggregate.output';
import { MainCategoryMinAggregate } from './main-category-min-aggregate.output';
import { MainCategoryMaxAggregate } from './main-category-max-aggregate.output';

@ObjectType()
export class AggregateMainCategory {

    @Field(() => MainCategoryCountAggregate, {nullable:true})
    _count?: MainCategoryCountAggregate;

    @Field(() => MainCategoryMinAggregate, {nullable:true})
    _min?: MainCategoryMinAggregate;

    @Field(() => MainCategoryMaxAggregate, {nullable:true})
    _max?: MainCategoryMaxAggregate;
}
