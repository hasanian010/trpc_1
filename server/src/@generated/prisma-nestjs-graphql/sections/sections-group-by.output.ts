import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SectionsCountAggregate } from './sections-count-aggregate.output';
import { SectionsMinAggregate } from './sections-min-aggregate.output';
import { SectionsMaxAggregate } from './sections-max-aggregate.output';

@ObjectType()
export class SectionsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false})
    publish!: boolean;

    @Field(() => String, {nullable:false})
    base!: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SectionsCountAggregate, {nullable:true})
    _count?: SectionsCountAggregate;

    @Field(() => SectionsMinAggregate, {nullable:true})
    _min?: SectionsMinAggregate;

    @Field(() => SectionsMaxAggregate, {nullable:true})
    _max?: SectionsMaxAggregate;
}
