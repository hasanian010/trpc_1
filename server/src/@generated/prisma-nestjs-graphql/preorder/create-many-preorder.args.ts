import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderCreateManyInput } from './preorder-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPreorderArgs {

    @Field(() => [PreorderCreateManyInput], {nullable:false})
    @Type(() => PreorderCreateManyInput)
    data!: Array<PreorderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
