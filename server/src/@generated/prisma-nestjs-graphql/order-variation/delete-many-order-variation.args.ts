import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationWhereInput } from './order-variation-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyOrderVariationArgs {

    @Field(() => OrderVariationWhereInput, {nullable:true})
    @Type(() => OrderVariationWhereInput)
    where?: OrderVariationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
