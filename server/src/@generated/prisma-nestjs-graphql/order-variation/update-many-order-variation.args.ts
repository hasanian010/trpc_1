import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationUpdateManyMutationInput } from './order-variation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderVariationWhereInput } from './order-variation-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyOrderVariationArgs {

    @Field(() => OrderVariationUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderVariationUpdateManyMutationInput)
    data!: OrderVariationUpdateManyMutationInput;

    @Field(() => OrderVariationWhereInput, {nullable:true})
    @Type(() => OrderVariationWhereInput)
    where?: OrderVariationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
