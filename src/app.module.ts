import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FpconnectModule } from './fpconnect/fpconnect.module';
import { MessageModule } from './message/message.module';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    FpconnectModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pass123',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    MessageModule,
  ],
  controllers: [AppController, MessageController],
  providers: [AppService, MessageService],
})
export class AppModule {}
