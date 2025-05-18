import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttributeUpdateManyMutationInput } from './attribute-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AttributeWhereInput } from './attribute-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAttributeArgs {

    @Field(() => AttributeUpdateManyMutationInput, {nullable:false})
    @Type(() => AttributeUpdateManyMutationInput)
    data!: AttributeUpdateManyMutationInput;

    @Field(() => AttributeWhereInput, {nullable:true})
    @Type(() => AttributeWhereInput)
    where?: AttributeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
