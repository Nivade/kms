import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTabContentComponent } from './location-tab-content.component';

describe('LocationTabContentComponent', () => {
  let component: LocationTabContentComponent;
  let fixture: ComponentFixture<LocationTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
