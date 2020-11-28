import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveredComponent } from './discovered.component';

describe('DicoveredComponent', () => {
  let component: DiscoveredComponent;
  let fixture: ComponentFixture<DiscoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
