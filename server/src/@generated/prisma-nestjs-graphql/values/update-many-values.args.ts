import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValuesUpdateManyMutationInput } from './values-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValuesWhereInput } from './values-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyValuesArgs {

    @Field(() => ValuesUpdateManyMutationInput, {nullable:false})
    @Type(() => ValuesUpdateManyMutationInput)
    data!: ValuesUpdateManyMutationInput;

    @Field(() => ValuesWhereInput, {nullable:true})
    @Type(() => ValuesWhereInput)
    where?: ValuesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
