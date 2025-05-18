import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderCreateWithoutUserInput } from './provider-create-without-user.input';
import { Type } from 'class-transformer';
import { ProviderCreateOrConnectWithoutUserInput } from './provider-create-or-connect-without-user.input';
import { ProviderCreateManyUserInputEnvelope } from './provider-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';

@InputType()
export class ProviderUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ProviderCreateWithoutUserInput], {nullable:true})
    @Type(() => ProviderCreateWithoutUserInput)
    create?: Array<ProviderCreateWithoutUserInput>;

    @Field(() => [ProviderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProviderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProviderCreateOrConnectWithoutUserInput>;

    @Field(() => ProviderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProviderCreateManyUserInputEnvelope)
    createMany?: ProviderCreateManyUserInputEnvelope;

    @Field(() => [ProviderWhereUniqueInput], {nullable:true})
    @Type(() => ProviderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>>;
}
