import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesCreateWithoutAttributeInput } from './values-create-without-attribute.input';
import { Type } from 'class-transformer';
import { ValuesCreateOrConnectWithoutAttributeInput } from './values-create-or-connect-without-attribute.input';
import { ValuesUpsertWithWhereUniqueWithoutAttributeInput } from './values-upsert-with-where-unique-without-attribute.input';
import { ValuesCreateManyAttributeInputEnvelope } from './values-create-many-attribute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';
import { ValuesUpdateWithWhereUniqueWithoutAttributeInput } from './values-update-with-where-unique-without-attribute.input';
import { ValuesUpdateManyWithWhereWithoutAttributeInput } from './values-update-many-with-where-without-attribute.input';
import { ValuesScalarWhereInput } from './values-scalar-where.input';

@InputType()
export class ValuesUpdateManyWithoutAttributeNestedInput {

    @Field(() => [ValuesCreateWithoutAttributeInput], {nullable:true})
    @Type(() => ValuesCreateWithoutAttributeInput)
    create?: Array<ValuesCreateWithoutAttributeInput>;

    @Field(() => [ValuesCreateOrConnectWithoutAttributeInput], {nullable:true})
    @Type(() => ValuesCreateOrConnectWithoutAttributeInput)
    connectOrCreate?: Array<ValuesCreateOrConnectWithoutAttributeInput>;

    @Field(() => [ValuesUpsertWithWhereUniqueWithoutAttributeInput], {nullable:true})
    @Type(() => ValuesUpsertWithWhereUniqueWithoutAttributeInput)
    upsert?: Array<ValuesUpsertWithWhereUniqueWithoutAttributeInput>;

    @Field(() => ValuesCreateManyAttributeInputEnvelope, {nullable:true})
    @Type(() => ValuesCreateManyAttributeInputEnvelope)
    createMany?: ValuesCreateManyAttributeInputEnvelope;

    @Field(() => [ValuesWhereUniqueInput], {nullable:true})
    @Type(() => ValuesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ValuesWhereUniqueInput], {nullable:true})
    @Type(() => ValuesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ValuesWhereUniqueInput], {nullable:true})
    @Type(() => ValuesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ValuesWhereUniqueInput], {nullable:true})
    @Type(() => ValuesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ValuesUpdateWithWhereUniqueWithoutAttributeInput], {nullable:true})
    @Type(() => ValuesUpdateWithWhereUniqueWithoutAttributeInput)
    update?: Array<ValuesUpdateWithWhereUniqueWithoutAttributeInput>;

    @Field(() => [ValuesUpdateManyWithWhereWithoutAttributeInput], {nullable:true})
    @Type(() => ValuesUpdateManyWithWhereWithoutAttributeInput)
    updateMany?: Array<ValuesUpdateManyWithWhereWithoutAttributeInput>;

    @Field(() => [ValuesScalarWhereInput], {nullable:true})
    @Type(() => ValuesScalarWhereInput)
    deleteMany?: Array<ValuesScalarWhereInput>;
}
