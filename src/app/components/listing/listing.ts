import { Component, OnInit } from '@angular/core';
import { DataJud } from '../../services/data-jud';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing',
  imports: [CommonModule],
  templateUrl: './listing.html',
})
export class Listing implements OnInit {
  data: any[] = [];
  error: boolean = false;

  constructor(private DataJud: DataJud) {}

  ngOnInit(): void {
    this.DataJud.getData().subscribe({
      next: (data) => {
        this.data = data.hits.hits.map((item: any) => item._source);

        console.log(this.data);
      },
      error: (error) => {
        this.error = true;
        console.log('Erro na requisição:', error);
      },
      complete: () => {
        console.log('Requisição finalizada');
      },
    });
  }
}
