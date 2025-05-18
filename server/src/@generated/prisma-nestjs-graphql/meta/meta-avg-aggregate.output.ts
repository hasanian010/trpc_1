import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MetaAvgAggregate {

    @Field(() => Float, {nullable:true})
    itemCount?: number;

    @Field(() => Float, {nullable:true})
    totalItems?: number;

    @Field(() => Float, {nullable:true})
    itemsPerPage?: number;

    @Field(() => Float, {nullable:true})
    totalPages?: number;

    @Field(() => Float, {nullable:true})
    currentPage?: number;
}
