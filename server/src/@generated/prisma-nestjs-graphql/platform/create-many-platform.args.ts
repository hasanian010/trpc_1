import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlatformCreateManyInput } from './platform-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlatformArgs {

    @Field(() => [PlatformCreateManyInput], {nullable:false})
    @Type(() => PlatformCreateManyInput)
    data!: Array<PlatformCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
