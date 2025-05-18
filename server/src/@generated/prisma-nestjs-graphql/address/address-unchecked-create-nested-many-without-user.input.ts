import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutUserInput } from './address-create-or-connect-without-user.input';
import { AddressCreateManyUserInputEnvelope } from './address-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AddressCreateWithoutUserInput], {nullable:true})
    @Type(() => AddressCreateWithoutUserInput)
    create?: Array<AddressCreateWithoutUserInput>;

    @Field(() => [AddressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AddressCreateOrConnectWithoutUserInput>;

    @Field(() => AddressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AddressCreateManyUserInputEnvelope)
    createMany?: AddressCreateManyUserInputEnvelope;

    @Field(() => [AddressWhereUniqueInput], {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
