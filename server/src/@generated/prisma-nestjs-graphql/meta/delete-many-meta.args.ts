import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaWhereInput } from './meta-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMetaArgs {

    @Field(() => MetaWhereInput, {nullable:true})
    @Type(() => MetaWhereInput)
    where?: MetaWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
