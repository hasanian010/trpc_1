import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FlashCountAggregate } from './flash-count-aggregate.output';
import { FlashMinAggregate } from './flash-min-aggregate.output';
import { FlashMaxAggregate } from './flash-max-aggregate.output';

@ObjectType()
export class FlashGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    thumb?: string;

    @Field(() => Date, {nullable:false})
    start!: Date | string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FlashCountAggregate, {nullable:true})
    _count?: FlashCountAggregate;

    @Field(() => FlashMinAggregate, {nullable:true})
    _min?: FlashMinAggregate;

    @Field(() => FlashMaxAggregate, {nullable:true})
    _max?: FlashMaxAggregate;
}
