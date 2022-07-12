import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateServiceDto, UpdateServiceDto } from '@nitro/shared/dtos';
import { IService } from '@nitro/shared/interfaces';
import { trackById } from '@nitro/shared/utils';
import { finalize } from 'rxjs';
import { ServicesService } from './services.service';

@Component({
  selector: 'w-admin-services',
  templateUrl: './services.page.html',
})
export class ServicesPage implements OnInit {
  public readonly trackById = trackById;

  public services: IService[] = [];

  public isLoadingServices = false;

  public isCreatingService = false;

  public isDeletingServicesId: { [key: string]: boolean } = {};

  public createForm!: FormGroup;

  public updateForm!: FormGroup;

  public constructor(
    private readonly servicesService: ServicesService,
    private readonly fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.createForm = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10000),
        ],
      ],
    });

    this.updateForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10000),
        ],
      ],
    });

    this.list();
  }

  public list(): void {
    if (this.isLoadingServices) return;
    this.isLoadingServices = true;

    this.servicesService
      .list()
      .pipe(finalize(() => (this.isLoadingServices = false)))
      .subscribe((services) => (this.services = services));
  }

  public create(): void {
    if (this.isCreatingService || this.createForm.invalid) return;
    this.createForm.disable();

    const createServiceDto: CreateServiceDto = {
      name: this.createForm.value.name,
    };

    this.servicesService
      .create(createServiceDto)
      .pipe(finalize(() => this.createForm.enable()))
      .subscribe(() => {
        this.createForm.reset();

        setTimeout(() => {
          (<HTMLInputElement>(
            document.querySelector('input[formControlName="name"]')
          ))?.focus();
        }, 5);

        this.list();
      });
  }

  public update(id: string, updateServiceDto: UpdateServiceDto): void {
    if (this.updateForm.invalid) return;

    this.servicesService.update(id, updateServiceDto).subscribe(() => {
      this.list();
    });
  }

  public delete(id: string): void {
    if (this.isDeletingServicesId[id]) return;

    this.isDeletingServicesId[id] = true;

    this.servicesService.delete(id).subscribe({
      complete: () => this.list(),
      error: () => delete this.isDeletingServicesId[id],
    });
  }
}
