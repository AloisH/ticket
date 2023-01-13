import { AccessTokenGuard, PrivateApiCoreAuthModule } from '@ticket/private-api/core/auth';

import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { PrivateApiFeatureAuthModule } from '@ticket/private-api/feature/auth';
import { PrivateApiFeatureCategoryModule } from '@ticket/private-api/feature/category';
import { PrivateApiFeatureTicketModule } from '@ticket/private-api/feature/ticket';
import { PrivateApiFeatureUserModule } from '@ticket/private-api/feature/user';

@Module({
  imports: [
    PrivateApiCoreAuthModule,
    PrivateApiFeatureAuthModule,
    PrivateApiFeatureUserModule,
    PrivateApiFeatureCategoryModule,
    PrivateApiFeatureTicketModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
