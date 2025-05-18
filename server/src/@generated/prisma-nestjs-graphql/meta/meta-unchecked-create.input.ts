import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MetaUncheckedCreateInput {

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
}
