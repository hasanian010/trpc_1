import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PreorderCountAggregate } from './preorder-count-aggregate.output';
import { PreorderMinAggregate } from './preorder-min-aggregate.output';
import { PreorderMaxAggregate } from './preorder-max-aggregate.output';

@ObjectType()
export class PreorderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => [String], {nullable:true})
    productImage?: Array<string>;

    @Field(() => [String], {nullable:true})
    productUrl?: Array<string>;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PreorderCountAggregate, {nullable:true})
    _count?: PreorderCountAggregate;

    @Field(() => PreorderMinAggregate, {nullable:true})
    _min?: PreorderMinAggregate;

    @Field(() => PreorderMaxAggregate, {nullable:true})
    _max?: PreorderMaxAggregate;
}
