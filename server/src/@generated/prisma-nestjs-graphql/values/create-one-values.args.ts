import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValuesCreateInput } from './values-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneValuesArgs {

    @Field(() => ValuesCreateInput, {nullable:false})
    @Type(() => ValuesCreateInput)
    data!: ValuesCreateInput;
}
