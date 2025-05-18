import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';
import { Type } from 'class-transformer';
import { AttributeCreateWithoutValuesInput } from './attribute-create-without-values.input';

@InputType()
export class AttributeCreateOrConnectWithoutValuesInput {

    @Field(() => AttributeWhereUniqueInput, {nullable:false})
    @Type(() => AttributeWhereUniqueInput)
    where!: Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>;

    @Field(() => AttributeCreateWithoutValuesInput, {nullable:false})
    @Type(() => AttributeCreateWithoutValuesInput)
    create!: AttributeCreateWithoutValuesInput;
}
