import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeCreateInput } from './income-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneIncomeArgs {

    @Field(() => IncomeCreateInput, {nullable:false})
    @Type(() => IncomeCreateInput)
    data!: IncomeCreateInput;
}
