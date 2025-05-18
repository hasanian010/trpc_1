import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderSellerWhereInput } from './order-seller-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyOrderSellerArgs {

    @Field(() => OrderSellerWhereInput, {nullable:true})
    @Type(() => OrderSellerWhereInput)
    where?: OrderSellerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
