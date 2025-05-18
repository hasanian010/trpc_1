import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderUpdateManyMutationInput } from './provider-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProviderWhereInput } from './provider-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProviderArgs {

    @Field(() => ProviderUpdateManyMutationInput, {nullable:false})
    @Type(() => ProviderUpdateManyMutationInput)
    data!: ProviderUpdateManyMutationInput;

    @Field(() => ProviderWhereInput, {nullable:true})
    @Type(() => ProviderWhereInput)
    where?: ProviderWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
