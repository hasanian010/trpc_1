import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateManyOrderSellerInput } from './order-product-create-many-order-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderProductCreateManyOrderSellerInputEnvelope {

    @Field(() => [OrderProductCreateManyOrderSellerInput], {nullable:false})
    @Type(() => OrderProductCreateManyOrderSellerInput)
    data!: Array<OrderProductCreateManyOrderSellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
