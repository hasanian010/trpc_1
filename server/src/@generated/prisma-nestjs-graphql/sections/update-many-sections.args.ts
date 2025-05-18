import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsUpdateManyMutationInput } from './sections-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SectionsWhereInput } from './sections-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySectionsArgs {

    @Field(() => SectionsUpdateManyMutationInput, {nullable:false})
    @Type(() => SectionsUpdateManyMutationInput)
    data!: SectionsUpdateManyMutationInput;

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
