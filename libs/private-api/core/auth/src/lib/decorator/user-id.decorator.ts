import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const userId = (context: ExecutionContext): number => {
  const request = context.switchToHttp().getRequest();
  return request.user.id;
};

export const UserId = createParamDecorator((_: undefined, context: ExecutionContext) => {
  return userId(context);
});
