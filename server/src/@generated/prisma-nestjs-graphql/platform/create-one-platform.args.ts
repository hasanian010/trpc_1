import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlatformCreateInput } from './platform-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlatformArgs {

    @Field(() => PlatformCreateInput, {nullable:false})
    @Type(() => PlatformCreateInput)
    data!: PlatformCreateInput;
}
