import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyOrderProductArgs {

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
