import { AccessTokenStrategy } from './strategy/access-token.strategy';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { RefreshTokenStrategy } from './strategy/refresh-token.strategy';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [AccessTokenStrategy, RefreshTokenStrategy],
})
export class PrivateApiCoreAuthModule {}
