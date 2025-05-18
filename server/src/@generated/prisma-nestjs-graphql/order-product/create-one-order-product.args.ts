import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductCreateInput } from './order-product-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderProductArgs {

    @Field(() => OrderProductCreateInput, {nullable:false})
    @Type(() => OrderProductCreateInput)
    data!: OrderProductCreateInput;
}
