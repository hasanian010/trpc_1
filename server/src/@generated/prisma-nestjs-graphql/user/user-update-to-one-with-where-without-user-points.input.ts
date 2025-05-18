import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserPointsInput } from './user-update-without-user-points.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserPointsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserPointsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserPointsInput)
    data!: UserUpdateWithoutUserPointsInput;
}
