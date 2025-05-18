import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPointsCreateWithoutUserInput } from './user-points-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPointsCreateOrConnectWithoutUserInput } from './user-points-create-or-connect-without-user.input';
import { UserPointsUpsertWithoutUserInput } from './user-points-upsert-without-user.input';
import { UserPointsWhereInput } from './user-points-where.input';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';
import { UserPointsUpdateToOneWithWhereWithoutUserInput } from './user-points-update-to-one-with-where-without-user.input';

@InputType()
export class UserPointsUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => UserPointsCreateWithoutUserInput, {nullable:true})
    @Type(() => UserPointsCreateWithoutUserInput)
    create?: UserPointsCreateWithoutUserInput;

    @Field(() => UserPointsCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserPointsCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserPointsCreateOrConnectWithoutUserInput;

    @Field(() => UserPointsUpsertWithoutUserInput, {nullable:true})
    @Type(() => UserPointsUpsertWithoutUserInput)
    upsert?: UserPointsUpsertWithoutUserInput;

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    disconnect?: UserPointsWhereInput;

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    delete?: UserPointsWhereInput;

    @Field(() => UserPointsWhereUniqueInput, {nullable:true})
    @Type(() => UserPointsWhereUniqueInput)
    connect?: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => UserPointsUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => UserPointsUpdateToOneWithWhereWithoutUserInput)
    update?: UserPointsUpdateToOneWithWhereWithoutUserInput;
}
