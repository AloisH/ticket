import { AccessTokenGuard, PrivateApiCoreAuthModule } from '@ticket/private-api/core/auth';

import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { PrivateApiFeatureAuthModule } from '@ticket/private-api/feature/auth';

@Module({
  imports: [PrivateApiCoreAuthModule, PrivateApiFeatureAuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
