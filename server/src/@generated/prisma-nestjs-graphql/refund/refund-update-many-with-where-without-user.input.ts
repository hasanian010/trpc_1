import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundScalarWhereInput } from './refund-scalar-where.input';
import { Type } from 'class-transformer';
import { RefundUpdateManyMutationInput } from './refund-update-many-mutation.input';

@InputType()
export class RefundUpdateManyWithWhereWithoutUserInput {

    @Field(() => RefundScalarWhereInput, {nullable:false})
    @Type(() => RefundScalarWhereInput)
    where!: RefundScalarWhereInput;

    @Field(() => RefundUpdateManyMutationInput, {nullable:false})
    @Type(() => RefundUpdateManyMutationInput)
    data!: RefundUpdateManyMutationInput;
}
