import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlatformWhereInput } from './platform-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPlatformArgs {

    @Field(() => PlatformWhereInput, {nullable:true})
    @Type(() => PlatformWhereInput)
    where?: PlatformWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
