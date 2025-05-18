import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductCreateManyProductInput } from './order-product-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderProductCreateManyProductInputEnvelope {

    @Field(() => [OrderProductCreateManyProductInput], {nullable:false})
    @Type(() => OrderProductCreateManyProductInput)
    data!: Array<OrderProductCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
