import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerScalarWhereInput } from './order-seller-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderSellerUpdateManyMutationInput } from './order-seller-update-many-mutation.input';

@InputType()
export class OrderSellerUpdateManyWithWhereWithoutOrderInput {

    @Field(() => OrderSellerScalarWhereInput, {nullable:false})
    @Type(() => OrderSellerScalarWhereInput)
    where!: OrderSellerScalarWhereInput;

    @Field(() => OrderSellerUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderSellerUpdateManyMutationInput)
    data!: OrderSellerUpdateManyMutationInput;
}
