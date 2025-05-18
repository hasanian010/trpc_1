import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SectionProductCountAggregate } from './section-product-count-aggregate.output';
import { SectionProductMinAggregate } from './section-product-min-aggregate.output';
import { SectionProductMaxAggregate } from './section-product-max-aggregate.output';

@ObjectType()
export class SectionProductGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sectionId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SectionProductCountAggregate, {nullable:true})
    _count?: SectionProductCountAggregate;

    @Field(() => SectionProductMinAggregate, {nullable:true})
    _min?: SectionProductMinAggregate;

    @Field(() => SectionProductMaxAggregate, {nullable:true})
    _max?: SectionProductMaxAggregate;
}
