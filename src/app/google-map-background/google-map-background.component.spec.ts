import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapBackgroundComponent } from './google-map-background.component';

describe('GoogleMapBackgroundComponent', () => {
  let component: GoogleMapBackgroundComponent;
  let fixture: ComponentFixture<GoogleMapBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
