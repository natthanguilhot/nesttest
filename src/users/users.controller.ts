import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Post('image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploadedFiles',
        filename: (req, file, cb) => {
          console.log(file);
          const mimetype = file.mimetype.split('/')[1];
          const fileName =
            file.originalname + '-' + Date.now() + '.' + mimetype;
          cb(null, fileName);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    console.log(file);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
