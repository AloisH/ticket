import { Module } from '@nestjs/common';
import { PrivateApiFeatureAuthModule } from '@ticket/private-api/feature/auth';

@Module({
  imports: [PrivateApiFeatureAuthModule],
})
export class AppModule {}
