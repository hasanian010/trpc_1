import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderCreateInput } from './provider-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProviderArgs {

    @Field(() => ProviderCreateInput, {nullable:false})
    @Type(() => ProviderCreateInput)
    data!: ProviderCreateInput;
}
