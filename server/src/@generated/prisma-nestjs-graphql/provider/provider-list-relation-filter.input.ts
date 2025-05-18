import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderWhereInput } from './provider-where.input';

@InputType()
export class ProviderListRelationFilter {

    @Field(() => ProviderWhereInput, {nullable:true})
    every?: ProviderWhereInput;

    @Field(() => ProviderWhereInput, {nullable:true})
    some?: ProviderWhereInput;

    @Field(() => ProviderWhereInput, {nullable:true})
    none?: ProviderWhereInput;
}
