import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderCreateManyUserInput } from './provider-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ProviderCreateManyUserInputEnvelope {

    @Field(() => [ProviderCreateManyUserInput], {nullable:false})
    @Type(() => ProviderCreateManyUserInput)
    data!: Array<ProviderCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
