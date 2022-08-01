import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    this.userModel.create(createUserDto);
    return this.userModel.find();
  }

  findAll() {
    return this.userModel.find();
  }

  remove(id: string) {
    console.log('id to delete :' + id);

    return this.userModel.findByIdAndRemove(id);
  }
}
