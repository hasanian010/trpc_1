import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';
import { Type } from 'class-transformer';
import { ValuesCreateWithoutAttributeInput } from './values-create-without-attribute.input';

@InputType()
export class ValuesCreateOrConnectWithoutAttributeInput {

    @Field(() => ValuesWhereUniqueInput, {nullable:false})
    @Type(() => ValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>;

    @Field(() => ValuesCreateWithoutAttributeInput, {nullable:false})
    @Type(() => ValuesCreateWithoutAttributeInput)
    create!: ValuesCreateWithoutAttributeInput;
}
