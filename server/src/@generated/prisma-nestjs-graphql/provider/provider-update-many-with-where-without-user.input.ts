import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderScalarWhereInput } from './provider-scalar-where.input';
import { Type } from 'class-transformer';
import { ProviderUpdateManyMutationInput } from './provider-update-many-mutation.input';

@InputType()
export class ProviderUpdateManyWithWhereWithoutUserInput {

    @Field(() => ProviderScalarWhereInput, {nullable:false})
    @Type(() => ProviderScalarWhereInput)
    where!: ProviderScalarWhereInput;

    @Field(() => ProviderUpdateManyMutationInput, {nullable:false})
    @Type(() => ProviderUpdateManyMutationInput)
    data!: ProviderUpdateManyMutationInput;
}
