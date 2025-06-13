import { Component, OnInit } from '@angular/core';
import { DataJud } from '../../services/data-jud';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListingModal } from '../listing-modal/listing-modal';

@Component({
  selector: 'app-listing',
  imports: [CommonModule, FormsModule, ListingModal],
  templateUrl: './listing.html',
})
export class Listing implements OnInit {
  data: any[] = [];
  error: boolean = false;

  selectedGrau: string = '';
  selectedJustica: string = '';
  sortDesc: boolean = false;

  filteredData: any[] = [];

  selectedProcess: any = null;
  showModal: boolean = false;

  constructor(private DataJud: DataJud) {}

  ngOnInit(): void {
    this.DataJud.getData().subscribe({
      next: (data) => {
        this.data = data.hits.hits.map((item: any) => item._source);
        this.applyFilters();
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

  applyFilters() {
    this.filteredData = this.data.filter((item) => {
      const justica = item.tribunal.startsWith('TRF') ? 'Federal' : 'Estadual';

      const grauMatch = this.selectedGrau
        ? item.grau === this.selectedGrau
        : true;
      const justicaMatch = this.selectedJustica
        ? justica === this.selectedJustica
        : true;

      return grauMatch && justicaMatch;
    });

    this.sortByAssuntos();
  }

  sortByAssuntos() {
    this.filteredData.sort((a, b) => {
      const aCount = a.assuntos?.length || 0;
      const bCount = b.assuntos?.length || 0;
      return this.sortDesc ? bCount - aCount : aCount - bCount;
    });
  }

  toggleSort() {
    this.sortDesc = !this.sortDesc;
    this.sortByAssuntos();
  }

  openModal(process: any) {
    this.selectedProcess = process;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProcess = null;
  }
}
