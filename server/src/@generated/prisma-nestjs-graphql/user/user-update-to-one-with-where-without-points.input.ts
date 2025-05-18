import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPointsInput } from './user-update-without-points.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPointsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPointsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPointsInput)
    data!: UserUpdateWithoutPointsInput;
}
