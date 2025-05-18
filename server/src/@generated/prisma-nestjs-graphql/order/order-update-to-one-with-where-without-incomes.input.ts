import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutIncomesInput } from './order-update-without-incomes.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutIncomesInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutIncomesInput, {nullable:false})
    @Type(() => OrderUpdateWithoutIncomesInput)
    data!: OrderUpdateWithoutIncomesInput;
}
