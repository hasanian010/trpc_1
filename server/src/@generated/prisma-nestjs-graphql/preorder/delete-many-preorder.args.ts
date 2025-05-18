import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderWhereInput } from './preorder-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPreorderArgs {

    @Field(() => PreorderWhereInput, {nullable:true})
    @Type(() => PreorderWhereInput)
    where?: PreorderWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
