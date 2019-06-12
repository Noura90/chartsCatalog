import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsCatalogComponent } from './charts-catalog.component';

describe('ChartsCatalogComponent', () => {
  let component: ChartsCatalogComponent;
  let fixture: ComponentFixture<ChartsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
