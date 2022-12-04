import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TopBarComponent
      ],
    }).compileComponents();
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(TopBarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Psintagram.');
  });

  //  it('should set an option', () => {
  //   const fixture = TestBed.createComponent(TopBarComponent);
  //   fixture.detectChanges();
  //  let select = fixture.debugElement.query(By.css('#breed')).nativeElement as HTMLSelectElement;

  //   select.selectedIndex = 1;
  //   select.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();

  //   component = fixture.componentInstance;
  //   // expect(+select.breed).toEqual(1);
  //   expect(select.value).toHaveBeenCalledWith('affenpinscher')
  //   // expect(component.test).toBe('blah');
  // });
});
