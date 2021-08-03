import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodemailerMainComponent } from './nodemailer-main.component';

describe('NodemailerMainComponent', () => {
  let component: NodemailerMainComponent;
  let fixture: ComponentFixture<NodemailerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodemailerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodemailerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
