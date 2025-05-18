import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawWhereInput } from './withdraw-where.input';

@InputType()
export class WithdrawListRelationFilter {

    @Field(() => WithdrawWhereInput, {nullable:true})
    every?: WithdrawWhereInput;

    @Field(() => WithdrawWhereInput, {nullable:true})
    some?: WithdrawWhereInput;

    @Field(() => WithdrawWhereInput, {nullable:true})
    none?: WithdrawWhereInput;
}
