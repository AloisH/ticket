import { ExecutionContext, Injectable } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorator/public.decorator';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AccessTokenGuard extends AuthGuard('access-strategy') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}
