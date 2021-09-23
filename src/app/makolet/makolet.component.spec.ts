import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakoletComponent } from './makolet.component';

describe('MakoletComponent', () => {
  let component: MakoletComponent;
  let fixture: ComponentFixture<MakoletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakoletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakoletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
