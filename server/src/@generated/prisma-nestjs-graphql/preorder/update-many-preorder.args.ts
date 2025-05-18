import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderUpdateManyMutationInput } from './preorder-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PreorderWhereInput } from './preorder-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPreorderArgs {

    @Field(() => PreorderUpdateManyMutationInput, {nullable:false})
    @Type(() => PreorderUpdateManyMutationInput)
    data!: PreorderUpdateManyMutationInput;

    @Field(() => PreorderWhereInput, {nullable:true})
    @Type(() => PreorderWhereInput)
    where?: PreorderWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
