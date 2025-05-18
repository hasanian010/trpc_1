import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeScalarWhereInput } from './income-scalar-where.input';
import { Type } from 'class-transformer';
import { IncomeUpdateManyMutationInput } from './income-update-many-mutation.input';

@InputType()
export class IncomeUpdateManyWithWhereWithoutSellerInput {

    @Field(() => IncomeScalarWhereInput, {nullable:false})
    @Type(() => IncomeScalarWhereInput)
    where!: IncomeScalarWhereInput;

    @Field(() => IncomeUpdateManyMutationInput, {nullable:false})
    @Type(() => IncomeUpdateManyMutationInput)
    data!: IncomeUpdateManyMutationInput;
}
