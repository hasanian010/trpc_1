import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateManyUserInput } from './address-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressCreateManyUserInputEnvelope {

    @Field(() => [AddressCreateManyUserInput], {nullable:false})
    @Type(() => AddressCreateManyUserInput)
    data!: Array<AddressCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
