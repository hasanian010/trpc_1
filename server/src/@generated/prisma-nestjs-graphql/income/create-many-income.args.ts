import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeCreateManyInput } from './income-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyIncomeArgs {

    @Field(() => [IncomeCreateManyInput], {nullable:false})
    @Type(() => IncomeCreateManyInput)
    data!: Array<IncomeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
