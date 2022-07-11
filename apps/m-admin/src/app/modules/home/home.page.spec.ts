import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        IonicModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [HomePage],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Admin App'`, () => {
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Admin App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome To Our Admin App!'
    );
  });
});
