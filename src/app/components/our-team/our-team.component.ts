import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  public listOfTeam;
  public currentList;
  public isMobile = false;
  public isLoad = false;

  constructor(private service: DataService) { }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }

    //this.service.get('Команда').subscribe(
    //  value => {
    //    this.listOfTeam = value;
    //    this.currentList = [...this.listOfTeam.slice(0, 3)];
    //    this.isLoad = true;
    //  }
    //);

    this.listOfTeam = [
      {
        "_id": "1",
        "name": "Артем Гарашко",
        "position": "Основатель Metabot и ведущий разработчик ботов",
        "comment": "Чат-боты - это только начало тренда. В будущем мы будем общаться с полноценными виртуальными личностями компаний и брендов!",
        "url": "assets/images/our-team/artem.jpg",
        "__v": 0
      }, {
        "_id": "2",
        "name": "Михаил Палей",
        "position": "Управляющий партнер",
        "comment": "Чат-боты упрощают взаимодействие с пользователем на всех уровнях. Доносить\n свою мысль до людей становится намного проще. И я вижу огромный потенциал\n в этом инструменте для развития предпринимательства и социальной сферы",
        "url": "assets/img/1572111825811-микрофон.png",
        "__v": 0
      }, {
        "_id": "3",
        "name": "Александр Гарашко",
        "position": "Основатель Metabot, архитектор и ведущий разработчик платформы",
        "comment": "Мы создали крутую платформу для асинхронных коммуникаций и уверены, что наш продукт займет достойное место на рынке интеграционных решений и современных коммуникаций",
        "url": "assets/img/фото команда 3.png",
        "__v": 0
      }
    ];

    this.currentList = [...this.listOfTeam.slice(0, 3)];
    this.isLoad = true;
  }

  toggleMore() {
    if (this.currentList.length <= 3) {
      this.currentList = [...this.listOfTeam];
    } else {
      this.currentList = this.listOfTeam.slice(0, 3);
    }
  }
}
