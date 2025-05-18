import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttributeCreateInput } from './attribute-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAttributeArgs {

    @Field(() => AttributeCreateInput, {nullable:false})
    @Type(() => AttributeCreateInput)
    data!: AttributeCreateInput;
}
