import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateServiceDto } from '@nitro/shared/dtos';
import { IService } from '@nitro/shared/interfaces';
import { trackById } from '@nitro/shared/utils';
import { BehaviorSubject, finalize } from 'rxjs';
import {
  fadeInDownOnEnterAnimation,
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';
import { ServicesService } from './services.service';

@Component({
  selector: 'nitro-frontend-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation(),
    fadeInDownOnEnterAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 350 }),
  ],
})
export class ServicesComponent {
  public readonly trackById = trackById;

  public services$ = new BehaviorSubject<IService[]>([]);

  public isLoadingServices$ = new BehaviorSubject<boolean>(false);

  public isDeletingIds$ = new BehaviorSubject<{ [key: string]: boolean }>({});

  public createForm!: FormGroup;

  public constructor(
    private readonly servicesService: ServicesService,
    fb: FormBuilder
  ) {
    this.createForm = fb.group({
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
    if (this.isLoadingServices$.value) return;
    this.isLoadingServices$.next(true);

    this.servicesService
      .list()
      .pipe(finalize(() => this.isLoadingServices$.next(false)))
      .subscribe((services) => this.services$.next(services));
  }

  public create(): void {
    if (this.createForm.invalid) return;
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
        }, 0);

        this.list();
      });
  }

  public delete(id: string): void {
    if (this.isDeletingIds$.value[id]) return;

    this.isDeletingIds$.next({
      ...this.isDeletingIds$.value,
      [id]: true,
    });

    this.servicesService.delete(id).subscribe({
      complete: () => this.list(),
      error: () => {
        this.isDeletingIds$.next({
          ...this.isDeletingIds$.value,
          [id]: false,
        });
      },
    });
  }
}
