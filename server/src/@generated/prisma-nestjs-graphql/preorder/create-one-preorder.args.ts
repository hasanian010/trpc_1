import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderCreateInput } from './preorder-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePreorderArgs {

    @Field(() => PreorderCreateInput, {nullable:false})
    @Type(() => PreorderCreateInput)
    data!: PreorderCreateInput;
}
