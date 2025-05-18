import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeUpdateManyMutationInput } from './income-update-many-mutation.input';
import { Type } from 'class-transformer';
import { IncomeWhereInput } from './income-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyIncomeArgs {

    @Field(() => IncomeUpdateManyMutationInput, {nullable:false})
    @Type(() => IncomeUpdateManyMutationInput)
    data!: IncomeUpdateManyMutationInput;

    @Field(() => IncomeWhereInput, {nullable:true})
    @Type(() => IncomeWhereInput)
    where?: IncomeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
