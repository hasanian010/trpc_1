import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutUserInput } from './seller-create-without-user.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutUserInput } from './seller-create-or-connect-without-user.input';
import { SellerUpsertWithWhereUniqueWithoutUserInput } from './seller-upsert-with-where-unique-without-user.input';
import { SellerCreateManyUserInputEnvelope } from './seller-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { SellerUpdateWithWhereUniqueWithoutUserInput } from './seller-update-with-where-unique-without-user.input';
import { SellerUpdateManyWithWhereWithoutUserInput } from './seller-update-many-with-where-without-user.input';
import { SellerScalarWhereInput } from './seller-scalar-where.input';

@InputType()
export class SellerUpdateManyWithoutUserNestedInput {

    @Field(() => [SellerCreateWithoutUserInput], {nullable:true})
    @Type(() => SellerCreateWithoutUserInput)
    create?: Array<SellerCreateWithoutUserInput>;

    @Field(() => [SellerCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SellerCreateOrConnectWithoutUserInput>;

    @Field(() => [SellerUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SellerUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SellerUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SellerCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SellerCreateManyUserInputEnvelope)
    createMany?: SellerCreateManyUserInputEnvelope;

    @Field(() => [SellerWhereUniqueInput], {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [SellerWhereUniqueInput], {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [SellerWhereUniqueInput], {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [SellerWhereUniqueInput], {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [SellerUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SellerUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SellerUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SellerUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SellerUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SellerUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SellerScalarWhereInput], {nullable:true})
    @Type(() => SellerScalarWhereInput)
    deleteMany?: Array<SellerScalarWhereInput>;
}
