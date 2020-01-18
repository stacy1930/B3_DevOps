import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloakComponent } from './cloak.component';

describe('CloakComponent', () => {
  let component: CloakComponent;
  let fixture: ComponentFixture<CloakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
