import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesCreateWithoutAttributeInput } from './values-create-without-attribute.input';
import { Type } from 'class-transformer';
import { ValuesCreateOrConnectWithoutAttributeInput } from './values-create-or-connect-without-attribute.input';
import { ValuesCreateManyAttributeInputEnvelope } from './values-create-many-attribute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';

@InputType()
export class ValuesCreateNestedManyWithoutAttributeInput {

    @Field(() => [ValuesCreateWithoutAttributeInput], {nullable:true})
    @Type(() => ValuesCreateWithoutAttributeInput)
    create?: Array<ValuesCreateWithoutAttributeInput>;

    @Field(() => [ValuesCreateOrConnectWithoutAttributeInput], {nullable:true})
    @Type(() => ValuesCreateOrConnectWithoutAttributeInput)
    connectOrCreate?: Array<ValuesCreateOrConnectWithoutAttributeInput>;

    @Field(() => ValuesCreateManyAttributeInputEnvelope, {nullable:true})
    @Type(() => ValuesCreateManyAttributeInputEnvelope)
    createMany?: ValuesCreateManyAttributeInputEnvelope;

    @Field(() => [ValuesWhereUniqueInput], {nullable:true})
    @Type(() => ValuesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>>;
}
