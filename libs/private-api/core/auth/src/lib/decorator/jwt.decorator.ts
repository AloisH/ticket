import { ExecutionContext, createParamDecorator } from '@nestjs/common';

const jwt = (context: ExecutionContext): string => {
  const request = context.switchToHttp().getRequest();
  return request.headers.authorization.split(' ')[1];
};

export const Jwt = createParamDecorator((_: undefined, context: ExecutionContext) => {
  return jwt(context);
});
