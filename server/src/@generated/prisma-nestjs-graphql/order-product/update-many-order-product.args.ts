import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductUpdateManyMutationInput } from './order-product-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderProductWhereInput } from './order-product-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyOrderProductArgs {

    @Field(() => OrderProductUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderProductUpdateManyMutationInput)
    data!: OrderProductUpdateManyMutationInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    @Type(() => OrderProductWhereInput)
    where?: OrderProductWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
