import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Mask } from '../../services/mask';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.html',
})
export class Registration {
  constructor(private Mask: Mask) {}

  successMessage: string | null = null;

  registeredParts: any[] = [];
  editingIndex: number | null = null;

  partsForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$'),
    ]),
    personType: new FormControl('', Validators.required),
    cpfcnpj: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
      ),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    if (this.partsForm.valid) {
      const newPart = this.partsForm.value;

      const parts = this.registeredParts;

      if (this.editingIndex !== null) {
        this.registeredParts[this.editingIndex] = newPart;
        this.successMessage = 'Parte editada com sucesso!';
        this.editingIndex = null;
      } else {
        parts.push(newPart);
        this.successMessage = 'Parte cadastrada com sucesso!';
      }

      localStorage.setItem('data', JSON.stringify(parts));

      setTimeout(() => {
        this.successMessage = null;
      }, 3000);

      this.loadRegisteredParts();
      this.partsForm.reset();
    } else {
      this.partsForm.markAllAsTouched();
    }
  }

  onCpfCnpjInput(event: any) {
    const value = event.target.value;
    const masked = this.Mask.formatCpfCnpj(value);
    this.partsForm.get('cpfcnpj')?.setValue(masked, { emitEvent: false });
  }

  ngOnInit() {
    this.loadRegisteredParts();
  }

  loadRegisteredParts() {
    const storedData = localStorage.getItem('data');
    this.registeredParts = storedData ? JSON.parse(storedData) : [];
  }

  editPart(index: number) {
    const part = this.registeredParts[index];
    this.partsForm.patchValue(part);
    this.editingIndex = index;
  }

  deletePart(index: number) {
    if (confirm('Deseja realmente excluir esta parte?')) {
      this.registeredParts.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(this.registeredParts));
      this.loadRegisteredParts();
    }
  }
}
