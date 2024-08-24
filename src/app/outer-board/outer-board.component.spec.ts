import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterBoardComponent } from './outer-board.component';

describe('OuterBoardComponent', () => {
  let component: OuterBoardComponent;
  let fixture: ComponentFixture<OuterBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuterBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
