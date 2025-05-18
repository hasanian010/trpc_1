import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaCreateInput } from './meta-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMetaArgs {

    @Field(() => MetaCreateInput, {nullable:false})
    @Type(() => MetaCreateInput)
    data!: MetaCreateInput;
}
