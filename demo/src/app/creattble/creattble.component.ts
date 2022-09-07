import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { Player, Winners } from '../medel/player';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-creattble',
  templateUrl: './creattble.component.html',
  styleUrls: ['./creattble.component.css']
})
export class CreattbleComponent implements OnInit {

  playerList: Player[] = [];
  playertObj: Player = {
    Id: '',
    first_name: '',
    Age: '',
    Score: ''
  };


  winnerList: Winners[] = [];
  winnerObj: Winners =
    {
      Id: '',
      first_name: '',
      Age: '',
      Score: ''
    }


  Id: string = '';
  first_name: string = '';
  Age: string = '';
  Score: string = '';
  filterData: any;
  val=false;
  val1=false;
  val2=false;
  topperList!: Winners[];


  constructor(private data: DataService) { }

  ngOnInit(): void {

  }


   //------------- apply filter for age less than 21-----------
  validetion() {
    this.val =!this.val
    this.val1=false;
      this.val2=false;
    this.filterData =
      this.playerList.filter((value: Player, index: Number, array: Player[]) => {

        return parseInt(value.Age) < 21

      })
  }
  //------------- subscribe to to db data------------------------

  getAllplayer() {
    this.data.getAllPlayers().subscribe(res => {

      this.playerList = res.map((e: any) => {

        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        this.validetion()
        return data;

      })


    }, err => {
      alert('Error while fetching student data');
    })

  }


//-------------to add the players to winner list--
  addToWinners(player: Player) {
    if (window.confirm('Confirm adding it to the winners  Name  ' + player.first_name + '    age  ' + player.Age + ' ?')) {
      this.playertObj = player
      this.data.addPlayer(player)
      console.log(this.playertObj);
      this.winnerObj.Id = '';
      this.winnerObj.first_name = this.playertObj.first_name;
      this.winnerObj.Age = this.playertObj.Age;
      this.winnerObj.Score = this.playertObj.Score;
    }
  }
  //---------------get winner list--------
  getwinnersList() {

    this.data.getwinnersList().subscribe(res => {

      this.winnerList = res.map((e: any) => {
        const data = e.payload.doc.data();
        // this.data.addPlayer(this.winnerObj)
        data.id = e.payload.doc.id;
        return data;
      })
      this.val1 = !this.val1
      this.val=false;
      this.val2=false;
      console.log(this.winnerList);


    }, err => {
      alert('Error while fetching student data');
    })
    
}
  //--------------- to get topper list-----------

getTopperList()
    {
      this.val2=!this.val2
      this.val=false;
      this.val1=false;
     this.topperList= this.winnerList.filter((value: Player, index: Number, array: Player[]) => {

        return parseInt(value.Score) > 90
      })
    }
}