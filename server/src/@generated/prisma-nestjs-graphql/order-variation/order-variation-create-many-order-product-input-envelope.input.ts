import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationCreateManyOrderProductInput } from './order-variation-create-many-order-product.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderVariationCreateManyOrderProductInputEnvelope {

    @Field(() => [OrderVariationCreateManyOrderProductInput], {nullable:false})
    @Type(() => OrderVariationCreateManyOrderProductInput)
    data!: Array<OrderVariationCreateManyOrderProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
