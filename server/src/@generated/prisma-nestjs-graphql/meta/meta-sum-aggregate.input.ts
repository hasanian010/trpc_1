import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MetaSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    itemCount?: true;

    @Field(() => Boolean, {nullable:true})
    totalItems?: true;

    @Field(() => Boolean, {nullable:true})
    itemsPerPage?: true;

    @Field(() => Boolean, {nullable:true})
    totalPages?: true;

    @Field(() => Boolean, {nullable:true})
    currentPage?: true;
}
