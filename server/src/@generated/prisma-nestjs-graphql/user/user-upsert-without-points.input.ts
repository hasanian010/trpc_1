import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPointsInput } from './user-update-without-points.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPointsInput } from './user-create-without-points.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPointsInput {

    @Field(() => UserUpdateWithoutPointsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPointsInput)
    update!: UserUpdateWithoutPointsInput;

    @Field(() => UserCreateWithoutPointsInput, {nullable:false})
    @Type(() => UserCreateWithoutPointsInput)
    create!: UserCreateWithoutPointsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
