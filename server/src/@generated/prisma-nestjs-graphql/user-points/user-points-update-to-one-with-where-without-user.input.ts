import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPointsWhereInput } from './user-points-where.input';
import { Type } from 'class-transformer';
import { UserPointsUpdateWithoutUserInput } from './user-points-update-without-user.input';

@InputType()
export class UserPointsUpdateToOneWithWhereWithoutUserInput {

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    where?: UserPointsWhereInput;

    @Field(() => UserPointsUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserPointsUpdateWithoutUserInput)
    data!: UserPointsUpdateWithoutUserInput;
}
