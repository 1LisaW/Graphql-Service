import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CreateUserInput } from './Dto/create-user.dto';
import { LoginInput } from './Dto/login.dto';
import { User } from './Entity/user.entity';
import { Jwt } from './Entity/jwt.entity';
import { UsersService } from './users.service';
import { ContextType } from '@nestjs/common';

// type UserContextType extends ContextType {

// }

@Resolver(() => User)
export class UserResolver {
  usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  @Query(() => User)
  getUserById(@Args('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Mutation(() => User)
  register(
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => Jwt)
  login(
    @Args('loginInput')
    loginInput: LoginInput,
  ) {
    return this.usersService.login(loginInput);
  }
}
