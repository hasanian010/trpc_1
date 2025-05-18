import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';
import { Type } from 'class-transformer';
import { AttributeCreateInput } from './attribute-create.input';
import { AttributeUpdateInput } from './attribute-update.input';

@ArgsType()
export class UpsertOneAttributeArgs {

    @Field(() => AttributeWhereUniqueInput, {nullable:false})
    @Type(() => AttributeWhereUniqueInput)
    where!: Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>;

    @Field(() => AttributeCreateInput, {nullable:false})
    @Type(() => AttributeCreateInput)
    create!: AttributeCreateInput;

    @Field(() => AttributeUpdateInput, {nullable:false})
    @Type(() => AttributeUpdateInput)
    update!: AttributeUpdateInput;
}
