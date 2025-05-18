import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderSellerCreateInput } from './order-seller-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderSellerArgs {

    @Field(() => OrderSellerCreateInput, {nullable:false})
    @Type(() => OrderSellerCreateInput)
    data!: OrderSellerCreateInput;
}
