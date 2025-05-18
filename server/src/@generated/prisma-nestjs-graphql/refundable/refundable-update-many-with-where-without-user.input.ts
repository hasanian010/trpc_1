import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableScalarWhereInput } from './refundable-scalar-where.input';
import { Type } from 'class-transformer';
import { RefundableUpdateManyMutationInput } from './refundable-update-many-mutation.input';

@InputType()
export class RefundableUpdateManyWithWhereWithoutUserInput {

    @Field(() => RefundableScalarWhereInput, {nullable:false})
    @Type(() => RefundableScalarWhereInput)
    where!: RefundableScalarWhereInput;

    @Field(() => RefundableUpdateManyMutationInput, {nullable:false})
    @Type(() => RefundableUpdateManyMutationInput)
    data!: RefundableUpdateManyMutationInput;
}
