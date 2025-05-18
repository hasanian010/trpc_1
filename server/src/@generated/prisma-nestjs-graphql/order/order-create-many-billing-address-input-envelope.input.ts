import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyBillingAddressInput } from './order-create-many-billing-address.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateManyBillingAddressInputEnvelope {

    @Field(() => [OrderCreateManyBillingAddressInput], {nullable:false})
    @Type(() => OrderCreateManyBillingAddressInput)
    data!: Array<OrderCreateManyBillingAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
