import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValuesWhereInput } from './values-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyValuesArgs {

    @Field(() => ValuesWhereInput, {nullable:true})
    @Type(() => ValuesWhereInput)
    where?: ValuesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
