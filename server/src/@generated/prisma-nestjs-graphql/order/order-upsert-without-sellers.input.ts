import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutSellersInput } from './order-update-without-sellers.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutSellersInput } from './order-create-without-sellers.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutSellersInput {

    @Field(() => OrderUpdateWithoutSellersInput, {nullable:false})
    @Type(() => OrderUpdateWithoutSellersInput)
    update!: OrderUpdateWithoutSellersInput;

    @Field(() => OrderCreateWithoutSellersInput, {nullable:false})
    @Type(() => OrderCreateWithoutSellersInput)
    create!: OrderCreateWithoutSellersInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
