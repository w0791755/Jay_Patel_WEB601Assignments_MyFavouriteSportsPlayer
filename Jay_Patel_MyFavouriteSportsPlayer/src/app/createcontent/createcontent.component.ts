import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './createcontent.component.html',
  styleUrls: ['./createcontent.component.css'],
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();
  newContent: Content = {
    id: 0,
      title: '',
      playername:'',
      playerdescription: '',
      imgURL: '',
      gender:'',
  };

  addContent() {
    const clonedContent = Object.assign({}, this.newContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    // clonedContent.tags = this.newContent.tags.split(',');
    this.contentAdded.emit(clonedContent);
    this.newContent = {
      id: 0,
      title: '',
      playername:'',
      playerdescription: '',
      imgURL: '',
      gender:'',
    };
  }
}