import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutUserInput } from './address-create-or-connect-without-user.input';
import { AddressUpsertWithWhereUniqueWithoutUserInput } from './address-upsert-with-where-unique-without-user.input';
import { AddressCreateManyUserInputEnvelope } from './address-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithWhereUniqueWithoutUserInput } from './address-update-with-where-unique-without-user.input';
import { AddressUpdateManyWithWhereWithoutUserInput } from './address-update-many-with-where-without-user.input';
import { AddressScalarWhereInput } from './address-scalar-where.input';

@InputType()
export class AddressUpdateManyWithoutUserNestedInput {

    @Field(() => [AddressCreateWithoutUserInput], {nullable:true})
    @Type(() => AddressCreateWithoutUserInput)
    create?: Array<AddressCreateWithoutUserInput>;

    @Field(() => [AddressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutUserInput>;

    @Field(() => [AddressUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AddressUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AddressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyUserInputEnvelope)
    createMany?: AddressCreateManyUserInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;

    @Field(() => [AddressUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AddressUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AddressUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AddressUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AddressUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AddressUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    @Type(() => AddressScalarWhereInput)
    deleteMany?: Array<AddressScalarWhereInput>;
}
