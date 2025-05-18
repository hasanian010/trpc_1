import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutUserInput } from './address-update-without-user.input';

@InputType()
export class AddressUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateWithoutUserInput, {nullable:false})
    @Type(() => AddressUpdateWithoutUserInput)
    data!: AddressUpdateWithoutUserInput;
}
