import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserPointsInput } from './user-update-without-user-points.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPointsInput } from './user-create-without-user-points.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserPointsInput {

    @Field(() => UserUpdateWithoutUserPointsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserPointsInput)
    update!: UserUpdateWithoutUserPointsInput;

    @Field(() => UserCreateWithoutUserPointsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPointsInput)
    create!: UserCreateWithoutUserPointsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
