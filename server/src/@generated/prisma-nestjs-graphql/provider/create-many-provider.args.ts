import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProviderCreateManyInput } from './provider-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProviderArgs {

    @Field(() => [ProviderCreateManyInput], {nullable:false})
    @Type(() => ProviderCreateManyInput)
    data!: Array<ProviderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
