import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('stitch/projects/:projectId/screens/:screenId')
  renderPixelForge(
    @Param('projectId') _projectId: string,
    @Param('screenId') _screenId: string,
    @Res() res: Response,
  ): void {
    res.sendFile(join(process.cwd(), 'public', 'pixelforge.html'));
  }
}
