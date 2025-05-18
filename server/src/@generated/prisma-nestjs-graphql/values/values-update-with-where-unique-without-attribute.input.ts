import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';
import { Type } from 'class-transformer';
import { ValuesUpdateWithoutAttributeInput } from './values-update-without-attribute.input';

@InputType()
export class ValuesUpdateWithWhereUniqueWithoutAttributeInput {

    @Field(() => ValuesWhereUniqueInput, {nullable:false})
    @Type(() => ValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>;

    @Field(() => ValuesUpdateWithoutAttributeInput, {nullable:false})
    @Type(() => ValuesUpdateWithoutAttributeInput)
    data!: ValuesUpdateWithoutAttributeInput;
}
