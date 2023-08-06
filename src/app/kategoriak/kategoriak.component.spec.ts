import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriakComponent } from './kategoriak.component';

describe('KategoriakComponent', () => {
  let component: KategoriakComponent;
  let fixture: ComponentFixture<KategoriakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoriakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategoriakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
