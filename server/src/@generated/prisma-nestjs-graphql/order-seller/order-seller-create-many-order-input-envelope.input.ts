import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateManyOrderInput } from './order-seller-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderSellerCreateManyOrderInputEnvelope {

    @Field(() => [OrderSellerCreateManyOrderInput], {nullable:false})
    @Type(() => OrderSellerCreateManyOrderInput)
    data!: Array<OrderSellerCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
