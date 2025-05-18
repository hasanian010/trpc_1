import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MetaMaxAggregate {

    @Field(() => Int, {nullable:true})
    itemCount?: number;

    @Field(() => Int, {nullable:true})
    totalItems?: number;

    @Field(() => Int, {nullable:true})
    itemsPerPage?: number;

    @Field(() => Int, {nullable:true})
    totalPages?: number;

    @Field(() => Int, {nullable:true})
    currentPage?: number;
}
