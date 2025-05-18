import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerCreateManySellerInput } from './order-seller-create-many-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderSellerCreateManySellerInputEnvelope {

    @Field(() => [OrderSellerCreateManySellerInput], {nullable:false})
    @Type(() => OrderSellerCreateManySellerInput)
    data!: Array<OrderSellerCreateManySellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
