import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent  {
  

  contentList: Content[]=[
    {
      id: 1,
      title: 'favspersone-1',
      playerdescription: 'World best Bowler',
      playername: 'Ms Dhoni',
      gender: 'male',
      imgURL: 'https://tse4.mm.bing.net/th?id=OIP.JAklCnAR2zxDK-LzEr3TOwHaKI&pid=Api&P=0'
    },
    {
      id: 2,
      title: 'favspersone-2',
      playerdescription: 'World best Betsmen',
      playername: 'Virat Kohli',
      gender: 'male',
      imgURL: 'https://tse2.mm.bing.net/th?id=OIP.Y764f40pToKMkRbPJ_nGLwHaF7&pid=Api&P=0'

    },
    {
      id: 3,
      title: 'favspersone-3',
      playerdescription: '\'World best Footballer',
      playername: 'Messi',
      gender: 'male',
      imgURL: 'https://tse2.mm.bing.net/th?id=OIP.chvg2SRxpkv_W_1CB85MRQHaEK&pid=Api&P=0'

    },
    {
      id: 4,
      title: 'favspersone-4',
      playerdescription: 'World best Betsmen',
      playername: 'Rohit Sharma',
      gender: 'male',
      imgURL: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTcWaAaevMsg54wmhq4pJIrcMf1u0iY7W6dj2MYtSiJA3HKCm5SqY198ePSebhb3dz2DqLS72iyHmQAln0'

    },
    {
      id: 5,
      title: 'favspersone-5',
      playerdescription: 'World best Bowler',
      playername: 'KL Rahul',
gender: 'male',
      imgURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2Fmsid-97258945%2Cimgsize-67284%2Cwidth-900%2Cheight-1200%2Cresizemode-6%2F97258945.jpg&imgrefurl=https%3A%2F%2Fm.timesofindia.com%2Fentertainment%2Fhindi%2Fweb-stories%2Fathiya-shetty-and-kl-rahul-look-stunning-as-bride-and-groom-in-their-first-pictures-as-man-and-wife%2Fphotostory%2F97258600.cms&tbnid=Lfei4f79VZUlfM&vet=12ahUKEwjtuYCgg6r9AhUAJGIAHeKZBPIQMygAegUIARDkAQ..i&docid=y9F3h69hy9_Z6M&w=900&h=1200&q=kl%20rahul&hl=en-GB&ved=2ahUKEwjtuYCgg6r9AhUAJGIAHeKZBPIQMygAegUIARDkAQ'

    },
    {
      id: 6,
      title: 'favspersone-6',
      playerdescription: 'World best Betsmen',
      playername: 'Sachine tendulkar',
       gender: 'male',
      imgURL: 'https://tse4.mm.bing.net/th?id=OIP.XA8mPULRKYGUjLkKOWoPcwHaFj&pid=Api&P=0'

    },
  ];
  constructor() {
  }
  ngOnInit(){

  }
}
