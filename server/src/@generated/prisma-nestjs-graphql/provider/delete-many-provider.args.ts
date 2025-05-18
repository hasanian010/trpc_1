import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProviderArgs {

    @Field(() => ProviderWhereInput, {nullable:true})
    @Type(() => ProviderWhereInput)
    where?: ProviderWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
