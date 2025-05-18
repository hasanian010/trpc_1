import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutIncomesInput } from './order-update-without-incomes.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutIncomesInput } from './order-create-without-incomes.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutIncomesInput {

    @Field(() => OrderUpdateWithoutIncomesInput, {nullable:false})
    @Type(() => OrderUpdateWithoutIncomesInput)
    update!: OrderUpdateWithoutIncomesInput;

    @Field(() => OrderCreateWithoutIncomesInput, {nullable:false})
    @Type(() => OrderCreateWithoutIncomesInput)
    create!: OrderCreateWithoutIncomesInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
