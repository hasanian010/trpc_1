import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressUpdateManyMutationInput } from './address-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AddressWhereInput } from './address-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAddressArgs {

    @Field(() => AddressUpdateManyMutationInput, {nullable:false})
    @Type(() => AddressUpdateManyMutationInput)
    data!: AddressUpdateManyMutationInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
