import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeCreateWithoutValuesInput } from './attribute-create-without-values.input';
import { Type } from 'class-transformer';
import { AttributeCreateOrConnectWithoutValuesInput } from './attribute-create-or-connect-without-values.input';
import { AttributeUpsertWithoutValuesInput } from './attribute-upsert-without-values.input';
import { Prisma } from '@prisma/client';
import { AttributeWhereUniqueInput } from './attribute-where-unique.input';
import { AttributeUpdateToOneWithWhereWithoutValuesInput } from './attribute-update-to-one-with-where-without-values.input';

@InputType()
export class AttributeUpdateOneRequiredWithoutValuesNestedInput {

    @Field(() => AttributeCreateWithoutValuesInput, {nullable:true})
    @Type(() => AttributeCreateWithoutValuesInput)
    create?: AttributeCreateWithoutValuesInput;

    @Field(() => AttributeCreateOrConnectWithoutValuesInput, {nullable:true})
    @Type(() => AttributeCreateOrConnectWithoutValuesInput)
    connectOrCreate?: AttributeCreateOrConnectWithoutValuesInput;

    @Field(() => AttributeUpsertWithoutValuesInput, {nullable:true})
    @Type(() => AttributeUpsertWithoutValuesInput)
    upsert?: AttributeUpsertWithoutValuesInput;

    @Field(() => AttributeWhereUniqueInput, {nullable:true})
    @Type(() => AttributeWhereUniqueInput)
    connect?: Prisma.AtLeast<AttributeWhereUniqueInput, 'id'>;

    @Field(() => AttributeUpdateToOneWithWhereWithoutValuesInput, {nullable:true})
    @Type(() => AttributeUpdateToOneWithWhereWithoutValuesInput)
    update?: AttributeUpdateToOneWithWhereWithoutValuesInput;
}
