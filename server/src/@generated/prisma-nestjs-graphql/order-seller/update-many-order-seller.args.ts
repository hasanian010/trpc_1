import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderSellerUpdateManyMutationInput } from './order-seller-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderSellerWhereInput } from './order-seller-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyOrderSellerArgs {

    @Field(() => OrderSellerUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderSellerUpdateManyMutationInput)
    data!: OrderSellerUpdateManyMutationInput;

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    where?: OrderSellerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
