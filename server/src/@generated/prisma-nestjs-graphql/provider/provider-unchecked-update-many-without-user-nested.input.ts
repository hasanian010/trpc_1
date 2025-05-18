import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderCreateWithoutUserInput } from './provider-create-without-user.input';
import { Type } from 'class-transformer';
import { ProviderCreateOrConnectWithoutUserInput } from './provider-create-or-connect-without-user.input';
import { ProviderUpsertWithWhereUniqueWithoutUserInput } from './provider-upsert-with-where-unique-without-user.input';
import { ProviderCreateManyUserInputEnvelope } from './provider-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProviderWhereUniqueInput } from './provider-where-unique.input';
import { ProviderUpdateWithWhereUniqueWithoutUserInput } from './provider-update-with-where-unique-without-user.input';
import { ProviderUpdateManyWithWhereWithoutUserInput } from './provider-update-many-with-where-without-user.input';
import { ProviderScalarWhereInput } from './provider-scalar-where.input';

@InputType()
export class ProviderUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ProviderCreateWithoutUserInput], {nullable:true})
    @Type(() => ProviderCreateWithoutUserInput)
    create?: Array<ProviderCreateWithoutUserInput>;

    @Field(() => [ProviderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProviderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProviderCreateOrConnectWithoutUserInput>;

    @Field(() => [ProviderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProviderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ProviderUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ProviderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProviderCreateManyUserInputEnvelope)
    createMany?: ProviderCreateManyUserInputEnvelope;

    @Field(() => [ProviderWhereUniqueInput], {nullable:true})
    @Type(() => ProviderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProviderWhereUniqueInput], {nullable:true})
    @Type(() => ProviderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProviderWhereUniqueInput], {nullable:true})
    @Type(() => ProviderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProviderWhereUniqueInput], {nullable:true})
    @Type(() => ProviderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProviderWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProviderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProviderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ProviderUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ProviderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ProviderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ProviderUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ProviderScalarWhereInput], {nullable:true})
    @Type(() => ProviderScalarWhereInput)
    deleteMany?: Array<ProviderScalarWhereInput>;
}
