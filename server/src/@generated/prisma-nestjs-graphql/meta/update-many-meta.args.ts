import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaUpdateManyMutationInput } from './meta-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MetaWhereInput } from './meta-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMetaArgs {

    @Field(() => MetaUpdateManyMutationInput, {nullable:false})
    @Type(() => MetaUpdateManyMutationInput)
    data!: MetaUpdateManyMutationInput;

    @Field(() => MetaWhereInput, {nullable:true})
    @Type(() => MetaWhereInput)
    where?: MetaWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
