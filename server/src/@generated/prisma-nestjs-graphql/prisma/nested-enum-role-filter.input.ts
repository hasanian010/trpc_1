import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';

@InputType()
export class NestedEnumRoleFilter {

    @Field(() => Role, {nullable:true})
    equals?: `${Role}`;

    @Field(() => [Role], {nullable:true})
    in?: Array<`${Role}`>;

    @Field(() => [Role], {nullable:true})
    notIn?: Array<`${Role}`>;

    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: NestedEnumRoleFilter;
}
