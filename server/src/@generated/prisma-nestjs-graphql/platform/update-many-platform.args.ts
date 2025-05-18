import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlatformUpdateManyMutationInput } from './platform-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlatformWhereInput } from './platform-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPlatformArgs {

    @Field(() => PlatformUpdateManyMutationInput, {nullable:false})
    @Type(() => PlatformUpdateManyMutationInput)
    data!: PlatformUpdateManyMutationInput;

    @Field(() => PlatformWhereInput, {nullable:true})
    @Type(() => PlatformWhereInput)
    where?: PlatformWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
