import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyShippingAddressInput } from './order-create-many-shipping-address.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateManyShippingAddressInputEnvelope {

    @Field(() => [OrderCreateManyShippingAddressInput], {nullable:false})
    @Type(() => OrderCreateManyShippingAddressInput)
    data!: Array<OrderCreateManyShippingAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
