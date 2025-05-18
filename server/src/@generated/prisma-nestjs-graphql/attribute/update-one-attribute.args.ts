import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttributeUpdateInput } from './attribute-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';

@ArgsType()
export class UpdateOneAttributeArgs {

    @Field(() => AttributeUpdateInput, {nullable:false})
    @Type(() => AttributeUpdateInput)
    data!: AttributeUpdateInput;

    @Field(() => AttributeWhereUniqueInput, {nullable:false})
    @Type(() => AttributeWhereUniqueInput)
    where!: Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>;
}
