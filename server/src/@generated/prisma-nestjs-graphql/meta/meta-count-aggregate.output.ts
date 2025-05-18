import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MetaCountAggregate {

    @Field(() => Int, {nullable:false})
    itemCount!: number;

    @Field(() => Int, {nullable:false})
    totalItems!: number;

    @Field(() => Int, {nullable:false})
    itemsPerPage!: number;

    @Field(() => Int, {nullable:false})
    totalPages!: number;

    @Field(() => Int, {nullable:false})
    currentPage!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
