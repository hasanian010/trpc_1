import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAttributeArgs {

    @Field(() => AttributeWhereUniqueInput, {nullable:false})
    @Type(() => AttributeWhereUniqueInput)
    where!: Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>;
}
