import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationScalarWhereInput } from './order-variation-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderVariationUpdateManyMutationInput } from './order-variation-update-many-mutation.input';

@InputType()
export class OrderVariationUpdateManyWithWhereWithoutOrderProductInput {

    @Field(() => OrderVariationScalarWhereInput, {nullable:false})
    @Type(() => OrderVariationScalarWhereInput)
    where!: OrderVariationScalarWhereInput;

    @Field(() => OrderVariationUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderVariationUpdateManyMutationInput)
    data!: OrderVariationUpdateManyMutationInput;
}
