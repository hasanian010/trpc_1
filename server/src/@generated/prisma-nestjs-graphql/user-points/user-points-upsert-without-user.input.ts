import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPointsUpdateWithoutUserInput } from './user-points-update-without-user.input';
import { Type } from 'class-transformer';
import { UserPointsCreateWithoutUserInput } from './user-points-create-without-user.input';
import { UserPointsWhereInput } from './user-points-where.input';

@InputType()
export class UserPointsUpsertWithoutUserInput {

    @Field(() => UserPointsUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserPointsUpdateWithoutUserInput)
    update!: UserPointsUpdateWithoutUserInput;

    @Field(() => UserPointsCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPointsCreateWithoutUserInput)
    create!: UserPointsCreateWithoutUserInput;

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    where?: UserPointsWhereInput;
}
