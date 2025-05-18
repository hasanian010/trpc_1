import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttributeWhereInput } from './attribute-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAttributeArgs {

    @Field(() => AttributeWhereInput, {nullable:true})
    @Type(() => AttributeWhereInput)
    where?: AttributeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
