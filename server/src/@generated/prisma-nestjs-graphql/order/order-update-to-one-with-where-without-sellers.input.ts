import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutSellersInput } from './order-update-without-sellers.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutSellersInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutSellersInput, {nullable:false})
    @Type(() => OrderUpdateWithoutSellersInput)
    data!: OrderUpdateWithoutSellersInput;
}
