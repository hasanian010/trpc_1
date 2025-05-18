import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductScalarWhereInput } from './order-product-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderProductUpdateManyMutationInput } from './order-product-update-many-mutation.input';

@InputType()
export class OrderProductUpdateManyWithWhereWithoutProductInput {

    @Field(() => OrderProductScalarWhereInput, {nullable:false})
    @Type(() => OrderProductScalarWhereInput)
    where!: OrderProductScalarWhereInput;

    @Field(() => OrderProductUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderProductUpdateManyMutationInput)
    data!: OrderProductUpdateManyMutationInput;
}
