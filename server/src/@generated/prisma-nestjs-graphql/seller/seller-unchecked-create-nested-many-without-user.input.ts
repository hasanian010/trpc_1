import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutUserInput } from './seller-create-without-user.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutUserInput } from './seller-create-or-connect-without-user.input';
import { SellerCreateManyUserInputEnvelope } from './seller-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [SellerCreateWithoutUserInput], {nullable:true})
    @Type(() => SellerCreateWithoutUserInput)
    create?: Array<SellerCreateWithoutUserInput>;

    @Field(() => [SellerCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SellerCreateOrConnectWithoutUserInput>;

    @Field(() => SellerCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SellerCreateManyUserInputEnvelope)
    createMany?: SellerCreateManyUserInputEnvelope;

    @Field(() => [SellerWhereUniqueInput], {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>>;
}
