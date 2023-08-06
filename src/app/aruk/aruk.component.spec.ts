import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArukComponent } from './aruk.component';

describe('ArukComponent', () => {
  let component: ArukComponent;
  let fixture: ComponentFixture<ArukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
